import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 5em;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;
export const Row = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
`;