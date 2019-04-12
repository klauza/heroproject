const initState = {
  projects: [
    {id: '1', title: 'batman the hero', content: 'lorem200'},
    {id: '2', title: 'superman the hero', content: 'lorem300'},
    {id: '3', title: 'spiderman the hero', content: 'lorem400'}

  ]
  
};

const projectReducer = (state = initState, action) => {
  switch(action.type) { 

    case 'CREATE_PROJECT': //if action.type == CREATE_PROJECT then do something
      console.log('created project', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      return state;

    default: 
      return state; 
  }
}

export default projectReducer