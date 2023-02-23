import './Story.scss';

const Stories = () => {

    //dummy data
    const stories = [
        {
            id: 1,
            name: "Sachchin Ram",
            img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Sachchin Ram",
            img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Sachchin Ram",
            img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4,
            name: "Sachchin Ram",
            img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        // {
        //     id: 1,
        //     name: "Sachchin Ram",
        //     img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        // },
        // {
        //     id: 1,
        //     name: "Sachchin Ram",
        //     img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        // },
        // {
        //     id: 1,
        //     name: "Sachchin Ram",
        //     img: "https://images.pexels.com/photos/7414102/pexels-photo-7414102.jpeg?auto=compress&cs=tinysrgb&w=600"
        // },
    ]
  return (
    <div className='stories'>
        <div className="story">
                    <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' alt="story" />
                    <div className="button-container">
                        <button>
                            <span>+</span>
                        </button>
                    </div>
                </div>
        {
            stories.map((story) => (
                <div key={story.id} className="story">
                    <img src={story.img} alt="story" />
                    <span>{story.name}</span>
                </div>
            ) )
        }
    </div>
  )
}

export default Stories