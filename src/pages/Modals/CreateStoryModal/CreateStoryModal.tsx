import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {useMutation, useQueryClient} from 'react-query';

import {IStory} from '@interfaces/IStory';
import {StoryService} from '@services/StoryService';
import {LocalStorageService} from '@services/LocalStorageService';
import {ButtonType, SimpleModal, StoryStatus} from '@models/common.models';
import {showToast} from '@utils/toastUtils';
import {Modal} from '@components/Modal/Modal';
import {Button} from '@components/Button/Button';
import {TextInput} from '@components/TextInput/TextInput';
import {ModalOptions} from './styles';

const CreateStoryModal: React.FC<SimpleModal> = ({isOpen, onClose}) => {
  const [t] = useTranslation();
  const [inputValue, setInputValue] = useState<string>('');
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: (story: IStory) => {
      return StoryService.createStory(story).then(resp => resp.data);
    },
    onSuccess() {
      handleSaveStory();
      client.invalidateQueries(['stories-list']);
    },
    onError(err) {
      showToast(err?.message, 'error');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSaveStory = () => {
    showToast(t('story-created'), 'success');
    onCloseModal();
  };

  const handleMutation = async () => {
    const roomId = await LocalStorageService.getItem('room').id;
    if (inputValue) {
      mutation.mutate({description: inputValue, status: StoryStatus.ACTIVE, estimate: '0', roomId});
    }
  };

  const onCloseModal = () => {
    onClose();
    setInputValue('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} title={t('create-new-story')}>
      <TextInput
        isTextArea
        value={inputValue}
        label={''}
        onChange={handleInputChange}
        placeholder={t('create-new-story-placeholder')}
      />
      <ModalOptions>
        <Button
          text={t('save')}
          width={'140px'}
          onClick={handleMutation}
          disabled={!inputValue.length}
        />
        <Button
          text={t('cancel')}
          width={'140px'}
          onClick={onCloseModal}
          type={ButtonType.Secondary}
        />
      </ModalOptions>
    </Modal>
  );
};

export {CreateStoryModal};
