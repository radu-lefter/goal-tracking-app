import React from 'react';
import Tile from './Tile';
import styled from 'styled-components';
import avatarLarge from '../assets/avatar_large.png';
import avatarSmall from '../assets/avatar_small.png';
import LikeButton from './LikeButton';
import Histogram from './Histogram';

const StyledDetailsArea = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  align-items: center;
  textarea {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.darkShade[25]};
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;

const StyledLargePhotoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    position: relative;
    top: -90px;
    z-index: -1;
  }
`;

const StyledSmallPhotoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    position: relative;
    top: -40px;
    left: 10px;
  }
`;

const StyledCheckinArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 190px;
  padding-left: 20px;
`;

const StyledScoreArea = styled.div`

display: flex;
flex-direction: row;
h3 {
  color: ${({ theme }) => theme.colors.purple};
},`;

const StyledDivider = styled.hr`
  border: 0.3px solid ${({ theme }) => theme.colors.darkShade[5]};
  width: 100%;
`;

const CommentArea = styled.div`

border-radius: 15px;
background-color: ${({ theme }) => theme.colors.grey};
width: 94%;
min-height: 80px;
padding 3%;
margin: 10px 0px;
h6:nth-child(2) {
    margin-top: 5%
 },

`;

function CheckinComment(props) {
  return (
    <Tile elevation="0.06">
      <StyledDetailsArea>
        <StyledLargePhotoArea>
          <img src={avatarLarge} alt="avatar" />
          <LikeButton></LikeButton>
        </StyledLargePhotoArea>

        <StyledCheckinArea>
          <h6>
            Joe Appleton <StyledSpan> Checked In </StyledSpan>
          </h6>
          <em> 2 hours ago </em> <h6> "Not bad, had a very good day"</h6>
          <h6> Total</h6>
          <StyledScoreArea>
            <h3>15</h3>
            <div style={{ width: '100%', height: '90%' }}>
              <Histogram barCount={7} bars={[10, 50, 30, 80, 80, 60, 20]} />
            </div>
          </StyledScoreArea>
        </StyledCheckinArea>
      </StyledDetailsArea>
      <StyledDivider />

      <StyledDetailsArea>
        <StyledSmallPhotoArea>
          <img src={avatarSmall} alt="avatar" />
        </StyledSmallPhotoArea>
        <CommentArea>
          <h6>
            Joe Appleton <em> 2 hours ago </em>
          </h6>

          <h6> Some comment as a fill in comment </h6>
        </CommentArea>
      </StyledDetailsArea>

      <StyledDetailsArea>
        <StyledSmallPhotoArea>
          <img src={avatarSmall} alt="avatar" />
        </StyledSmallPhotoArea>
        <textarea rows="7"></textarea>
      </StyledDetailsArea>
    </Tile>
  );
}

export default CheckinComment;
