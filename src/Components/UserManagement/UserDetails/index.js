import React from 'react'
import {
  CardContainer,
  CardHeader,
  BtnContainer,
  InfoContainer,
  Info,
  Heading,
  Divider,
  TextBox,
  InviteContainer,
  CardFooter
} from './styles'
import BackButton from '../../Buttons/BackButton'
import DeleteButton from '../../Buttons/DeleteButton'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Invitations from '../../Invitations'
import SecondaryButton from '../../Buttons/SecondaryButton'

export default function UserDetailsComponent () {
  return (
    <CardContainer>
      <CardHeader>
        <BackButton />
        <BtnContainer>
          <PrimaryButton text={'Export Record'} />
          <DeleteButton />
        </BtnContainer>
      </CardHeader>
      <>
        <Divider>
          <InfoContainer>
            <Info>
              <TextBox>
                Name: <strong>Joan Powell</strong>
              </TextBox>
              <TextBox>
                Phone: <strong>01234567890</strong>
              </TextBox>
            </Info>
            <Info>
              <TextBox>
                Email: <strong>abc@gmail.com</strong>
              </TextBox>
              <TextBox>
                Lisenced: <strong>Yes</strong>
              </TextBox>
            </Info>
          </InfoContainer>
          <Heading>Social Accounts</Heading>
        </Divider>
        <Divider>
          <InfoContainer>
            <Info>
              <TextBox>
                SnapChat: <strong>Username</strong>
              </TextBox>
              <TextBox>
                Instagram: <strong>Username</strong>
              </TextBox>
              <TextBox>
                Tiktok: <strong>Username</strong>
              </TextBox>
            </Info>
          </InfoContainer>
          <Heading>Referal Progress</Heading>
        </Divider>
        <Divider>
          <InviteContainer>
            <Invitations
              text={'Total Invitations sent'}
              number={'10'}
              status={'sent'}
            />
            <Invitations
              text={'Accepted Invitations'}
              number={'5'}
              status={'accepted'}
            />
            <Invitations
              text={'Pending Invitations'}
              number={'5'}
              status={'pending'}
            />
          </InviteContainer>
        </Divider>
      </>
      <CardFooter>
        <BtnContainer>
          <SecondaryButton text={'Not Verified'} />
          <PrimaryButton text={'Verify'} />
        </BtnContainer>
      </CardFooter>
    </CardContainer>
  )
}
