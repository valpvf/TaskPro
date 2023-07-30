import React from 'react';
import icons from '../../images/sprite.svg';
import {Container,  Wrapper, Logo, LogoWrapper, Icon, Title, Text, AuthWrapper, AuthButton} from "./Welcome.styled"

function Welcome() {
  return (
    <Container>
        <Wrapper>
            <Logo />
          <LogoWrapper>
            <Icon><use href={`${icons}#icon-logo`} /></Icon>
            <Title>TASK PRO</Title>
          </LogoWrapper>
          <Text>
            Supercharge your productivity and take control of your tasks with Task
            Pro - Don't wait, start achieving your goals now!
          </Text>
        <AuthWrapper>
            {/* <AuthButton to="/home">Registration</AuthButton >
            <AuthButton to="/home">Log In</AuthButton > */}
            <AuthButton to="register">Registration</AuthButton >
            <AuthButton to="login">Log In</AuthButton >
        </AuthWrapper>
        </Wrapper>
    </Container>
  );
}

export default Welcome;