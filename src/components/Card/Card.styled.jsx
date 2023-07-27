import styled from "@emotion/styled";

export const CardWrapper = styled.div `
    margin-top: 10px;
    background-color: #121212;
    width: 334px;
    border-radius: 8px;
    padding: 15px;
    border-left: 4px solid #8FA1D0;
`
export const PriorityWrapper = styled.div `
    display: flex;
    gap: 10px;
`

export const Title = styled.h4 `
    font-weight: 600;
    font-size: 14px;
    color: white;
    margin: 0;
`
export const SubTitle = styled.p `
    font-weight: 400;
    margin-bottom: 12px;
    height: 38px;
    color: #b7b7b7;
    max-width: 290px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const PrioryTitle = styled.p `
    font-weight: 400;
    font-size: 8px;
    color: #999999;
    margin: 0;
`

export const PriorySubTitle = styled.h5 `
    font-weight: 400;
    font-size: 10px;
    color: white;
    margin: 0;
`