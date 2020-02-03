/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import styled from 'styled-components'

export const StyledCodeBox = styled.div`
  margin: 5px 0;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: white;

  .header {
    margin-bottom: 10px;
    border-bottom: 1px dashed ${({ theme }) => theme.borderColor};

    .title {
      font-size: 16px;
      font-weight: bolder;
      margin: 10px;
    }

    .desc {
      margin: 10px;
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin: 10px 0;
    border-top: 1px dashed ${({ theme }) => theme.borderColor};
    border-bottom: 1px dashed ${({ theme }) => theme.borderColor};

    > * {
      margin: 0 5px;
    }
  }
`
