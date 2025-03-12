import Card from "./Card";

function Card_Data() {
    const Data = [
        {
            id: 1,
            title: "TRI2026",
            minititle:"Good For Upper Country",

            learn: "This plant is grown on kegalle district,“Learn more about the high-yielding tea cultivar TRI 4042 and its benefits on our website. Discover its exceptional quality, adaptability, and disease resistance, making it a top choice for tea cultivation. Visit us for detailed insights and expert guidance!”",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
        {
            id: 2,
            title: "TRI4042",
            minititle:"Good For Low Country",
            learn: "“Learn more about the high-yielding tea cultivar TRI 4042 and its benefits on our website. Discover its exceptional quality, adaptability, and disease resistance, making it a top choice for tea cultivation. Visit us for detailed insights and expert guidance!”",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
        {
            id: 3,
            title: "TRI4045",
            minititle:"Good For Mid Country",
            learn: "This plant is grown on rathnapura district",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
        {
            id: 4,
            title: "TRI4050",
            minititle:"Good For Mid Country",
            learn: "This plant is grown on rathnapura district",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
        {
            id: 5,
            title: "TRI4055",
            minititle:"Good For low Country",
            learn: "This plant is grown on rathnapura district",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
        {
            id: 6,
            title: "TRI4060",
            minititle:"Good For Mid Country",
            learn: "This plant is grown on rathnapura district",
            image: "./oriento-gy_DN08336U-unsplash.jpg"
        },
       
       

    ];

    return (
        <div className="mainc">
            {Data.map((item) => (
                <Card 
                    key={item.id} 
                    title={item.title} 

                    description={item.minititle}
                    learn={item.learn} 
                    image={item.image} 
                />
            ))}
        </div>
    );
}

export default Card_Data;