import { Table, Container, Row, Column} from "react-bootstrap";
import { Plants } from "../../plants";


function FilteredTable(props) {
    
    const allKeys = Object.keys(Plants[0]).slice(1);
    const columns = allKeys.map((item) => item[0].toUpperCase() + item.slice(1));

    const dataObjs = [...Plants];
    const filterdList = [...props.list]

    return (
        <Container>
            <Row>
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th className="px-3">{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filterdList.map( (obj) =>
                            (
                                <tr>
                                    {Object.values(obj)
                                            .filter((item, index) => index != 0)
                                                .map((item) => 
                                                    <td>{item}</td>
                                                )
                                    }
                                    
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </Row>
        </Container>
    )
}


export default FilteredTable;