import '../App.css'

 export default function (images){
    return(
        <div>
                {
                    images.data.map(image => (
                    <div key={image.id} className="column">
                        <img src={image.img} alt=""></img>
                    </div>
                    ) )
                }
        </div>
    )
}

