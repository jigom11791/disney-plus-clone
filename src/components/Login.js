import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
      <Container>
          <CTA>
              <CTALogo1 src="/images/cta-logo-one.svg" alt="3 services logo"/>
              <SignUp>GET ALL THERE</SignUp>
              <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ Subscription. As of 03/24/21, the price of Disney+ and the Disney Bundle will increase by $1
              </Description>
              <CTALogo2 src="/images/cta-logo-two.png" alt="studio logos" />
          </CTA>
      </Container>
  )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    padding-top: 100px;
        
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -10;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const CTALogo1 = styled.img``
const SignUp =styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`

const Description =styled.div`
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`
const CTALogo2 = styled.img`
    width: 90%;
`