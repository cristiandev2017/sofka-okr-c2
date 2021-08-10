import React from 'react';
import renderer from 'react-test-renderer';
import Okruser from './../../pages/dashboard/Okruser';


it('renders correctly', () => {
  const okr = {
    id:"1",
    title:"title of okr",
    description:"desds",
    areainCharge:"Agile services",
    krs:[
    
    ]
   }

  const tree = renderer
    .create(<Okruser okr={okr}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});