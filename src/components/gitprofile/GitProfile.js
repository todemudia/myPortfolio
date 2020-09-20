import React, {useState} from 'react';
import CardForm from './CardForm';
import CardList from './CardList';

// gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const GitProfile = (props) => {
  const [profiles, setProfiles] = useState(testData);
  const addNewProfile = (profileData) => {
    //Appends new data to the prev state
    setProfiles([...profiles, profileData])
  }
  return (
    <div>
        <div className="header">{props.title}</div>
        <CardForm onSubmit={addNewProfile}/>
        <CardList profiles={profiles} />
    </div>
    );
}

export default GitProfile;
