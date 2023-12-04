import React, {useEffect, useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {FiClock} from 'react-icons/fi';

import {theme} from '@styles/theme';
import {IRoom} from '@interfaces/IRoom';
import {LocalStorageService} from '@services/LocalStorageService';
import {Separator} from '@components/Separator/Separator';
import {Stories} from '@pages/Stories/Stories';
import {Players} from '@pages/Players/Players';
import {Cards, Container, Content, ContentTimer, Header, Timer, Title} from './styles';

const Room: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [room, setRoom] = useState<IRoom>();
  const [timer, setTimer] = useState<number>(0);
  const [startVoting, setStartVoting] = useState<boolean>(false);

  const startTimer = () => {
    setStartVoting(true);
  };

  const resetTimer = () => {
    setTimer(0);
    setStartVoting(false);
  };

  const persistTimer = (newTimer: number) => {
    localStorage.setItem('timer', JSON.stringify(newTimer));
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const storedTimer = localStorage.getItem('timer');
    if (storedTimer) {
      setTimer(JSON.parse(storedTimer));
    }
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (startVoting) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => {
          const newTimer = prevTimer + 1;
          persistTimer(newTimer);
          return newTimer;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [startVoting]);

  useEffect(() => {
    const fetchUser = async () => {
      const hasUser = await LocalStorageService.getItem('user');
      const room = await LocalStorageService.getItem('room');
      setRoom(room);
      if (!hasUser) {
        navigate('/');
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <Container>
      <Stories inviteId={id} />
      <Content>
        <Header>
          <Title>{room?.name}</Title>
          <ContentTimer>
            <FiClock size={18} color={theme.COLORS.SECONDARY_GRAY} />
            <Timer>{formatTime(timer)}</Timer>
          </ContentTimer>
        </Header>
        <Separator />
        <Cards></Cards>
      </Content>
      <Players startVoting={startTimer} resetVoting={resetTimer} hasVoting={startVoting} />
    </Container>
  );
};

export {Room};
