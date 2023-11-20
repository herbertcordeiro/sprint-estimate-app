import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';

import {ButtonType} from '@models/common.models';
import {Button} from '@components/Button/Button';
import {Modal} from '@components/Modal/Modal';
import {TextInput} from '@components/TextInput/TextInput';
import {Container, ModalOptions, SubTitle, Title} from './styles';

const Home: React.FC = () => {
  const [t] = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue('');
  };

  return (
    <Container>
      <Title>{t('scrum-poker-for-agile-teams')}</Title>
      <SubTitle>{t('make-sprint-planning-easier')}</SubTitle>
      <Button text={t('create-room')} route={'room'} width={'460px'} />
      <Button
        type={ButtonType.Secondary}
        text={t('join-room')}
        onClick={openModal}
        width={'460px'}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} title={t('lets-start')}>
        <TextInput
          value={inputValue}
          label={t('name')}
          onChange={handleInputChange}
          placeholder={t('enter-your-name')}
        />
        <ModalOptions>
          <Button text={t('send')} route={'room'} width={'140px'} />
          <Button
            text={t('cancel')}
            type={ButtonType.Secondary}
            onClick={closeModal}
            width={'140px'}
          />
        </ModalOptions>
      </Modal>
    </Container>
  );
};

export {Home};
