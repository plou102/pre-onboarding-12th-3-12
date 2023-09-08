import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'styled-components';
import { Disease } from 'types';
import { MarkText } from 'utils/mark';
import { useKeywordContext } from 'context/useKeywordContext';
type RecommendItemProps = {
  disease: Disease;
};
const RecommendItem: React.FC<RecommendItemProps> = ({ disease }) => {
  const { inputKeyword } = useKeywordContext();
  return (
    <StyledItem>
      <AiOutlineSearch size="34" />
      <StyledButton>
        {MarkText({ text: disease.sickNm, targetWord: inputKeyword })}
      </StyledButton>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  // TODO select 되었을 때 css로 넣기
  /* background-color: var(--gray-100);
  border-radius: 10px; */
`;

const StyledButton = styled.button`
  font-size: 20px;
`;

export default RecommendItem;
