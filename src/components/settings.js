import React from 'react';

function Settings({ onNavigate }) {
  return <main><button className="back" onClick={() => onNavigate('mainmenu')}><img src="/assets/back.png" alt="back" /></button><h1>Settings</h1><label><input type="checkbox" defaultChecked /> Sound effects</label><label><input type="checkbox" defaultChecked /> Music</label></main>;
}

export default Settings;
