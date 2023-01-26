import React from 'react';
import PropTypes from 'prop-types';
// import { Box } from '../Box';

import {Wraper,
  WraperImg,
  ActorsListStyled,
  ActorNameStyled,
  ActorCharacterStyled,
} from './ActorList.styled';

const ActorsList = ({ actors }) => {
  return (
    <ActorsListStyled>
      {actors.map(({ name, character, actorPhotoPath }) => {
        return (
          <li key={name}>
            <article>
              <WraperImg>
                <img src={actorPhotoPath} alt={name} width="150" />
              </WraperImg>
              <Wraper>
                <ActorNameStyled>{name}</ActorNameStyled>
                <ActorCharacterStyled>
                  Character: {character}
                </ActorCharacterStyled>
              </Wraper>
            </article>
          </li>
        );
      })}
    </ActorsListStyled>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      actorPhotoPath: PropTypes.string,
    })
  ).isRequired,
};

export default ActorsList;
