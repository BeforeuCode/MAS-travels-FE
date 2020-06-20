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
  margin: auto;
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

export const TravelCard: FC<IProps> = () => {
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
              Trip to Italy
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              1500zł
            </Typography>
          </StyledCardHeader>
          <StyledCardBody>
            <Typography variant="body2" color="textSecondary" component="p">
              Theme: Recreation
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              <span role="img" aria-label="rate">
                ⭐⭐⭐
              </span>
            </Typography>
          </StyledCardBody>
          <StyledCardBody>
            <Typography variant="body2" color="textSecondary" component="p">
              Country: Italy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Conveyance: Airplane
            </Typography>
          </StyledCardBody>
        </StyledCardContent>
        <StyledCardActions>
          <Button size="small" color="primary" onClick={handleExpandClick}>
            Information Card
          </Button>
          <Button size="small" color="primary">
            Ask For Contact
          </Button>
        </StyledCardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <Typography gutterBottom variant="h5" component="h2">
                Information
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolor excepturi minus nobis numquam pariatur porro
              provident rem! Architecto delectus deleniti eius eos harum id
              nemo, numquam provident quibusdam reiciendis?
            </Typography>
            <Typography paragraph>
              <Typography gutterBottom variant="h5" component="h2">
                Comments
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolor excepturi minus nobis numquam pariatur porro
              provident rem! Architecto delectus deleniti eius eos harum id
              nemo, numquam provident quibusdam reiciendis?
            </Typography>
            <Typography paragraph>
              <Typography gutterBottom variant="h5" component="h2">
                Restrictions
              </Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolor excepturi minus nobis numquam pariatur porro
              provident rem! Architecto delectus deleniti eius eos harum id
              nemo, numquam provident quibusdam reiciendis?
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Wrapper>
  );
};
