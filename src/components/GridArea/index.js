import styled from 'styled-components';
import { prop } from '../../utils';

const RowStart = prop("rowStart")
const RowEnd  = prop("rowEnd")
const ColStart = prop("colStart")
const ColEnd = prop("colEnd")

const GridArea = styled.section`
    grid-row: ${RowStart} / ${RowEnd};
    grid-column: ${ColStart} / ${ColEnd};
`

export default GridArea;