import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from '@material-ui/core';
import { ITravel } from '../../../../../../Types/travel';

const Wrapper = styled.div`
  width: 80%;
  margin: auto auto 4rem;
`;

const StyledActionButton = styled(Button)`
  && {
    margin-left: auto;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding: 1.4rem 1.4rem 0 1.4rem;
  }
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
interface IProps {
  travel: ITravel;
}

export const TravelCard: FC<IProps> = ({ travel }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
      <Card>
        <StyledCardContent>
          <StyledCardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              {travel.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {`${travel.price}€`}
            </Typography>
          </StyledCardHeader>
          <StyledCardBody>
            <Typography variant="body2" color="textSecondary" component="p">
              Theme: {travel.theme}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {[...Array(travel.rate)].map((e, i) => (
                <span role="img" aria-label="rate" key={i}>
                  ⭐
                </span>
              ))}
            </Typography>
          </StyledCardBody>
          <StyledCardBody>
            {travel.country && (
              <Typography variant="body2" color="textSecondary" component="p">
                Country: {travel.country}
              </Typography>
            )}
            {travel.conveyance && (
              <Typography variant="body2" color="textSecondary" component="p">
                Conveyance: {travel.conveyance}
              </Typography>
            )}
            {travel.city && (
              <Typography variant="body2" color="textSecondary" component="p">
                City: {travel.city}
              </Typography>
            )}
          </StyledCardBody>
        </StyledCardContent>
        <StyledCardActions>
          {travel.informationCard && (
            <Button size="small" color="primary" onClick={handleExpandClick}>
              Information Card
            </Button>
          )}
          <StyledActionButton size="small" color="primary">
            Ask For Contact
          </StyledActionButton>
        </StyledCardActions>
        {travel.informationCard && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {travel.informationCard.information && (
                <Typography paragraph>
                  <Typography gutterBottom variant="h5" component="h2">
                    Information
                  </Typography>
                  {travel.informationCard.information}
                </Typography>
              )}
              {travel.informationCard.comments && (
                <Typography paragraph>
                  <Typography gutterBottom variant="h5" component="h2">
                    Comments
                  </Typography>
                  {travel.informationCard.comments}
                </Typography>
              )}
              {travel.informationCard.restrictions && (
                <Typography paragraph>
                  <Typography gutterBottom variant="h5" component="h2">
                    Restrictions
                  </Typography>
                  {travel.informationCard.restrictions}
                </Typography>
              )}
            </CardContent>
          </Collapse>
        )}
      </Card>
    </Wrapper>
  );
};
