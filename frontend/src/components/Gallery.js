import Card from '../components/card-silver-tempest'

function Gallery(props) {
    return (
        <div >
            <h1>Mapping direction</h1>
            {props.ourData.map((data) => {
                return <Card data={data} />
            })}
        </div>
    )

}

export default Gallery