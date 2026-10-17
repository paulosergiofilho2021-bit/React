import Item from './Item';

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca={88} ano_lancamento={1964}/>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </>
    )
}
export default List;