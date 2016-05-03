

import React from 'react';

export default class Apps extends React.Component{
    constructor(props){
      super (props);
    }

    render(){
      return(
        <ul className="nav">
            <li className="nav-link nav-userimg">
                <a href="#">
                    <img alt="Jeff" title="Jeff" src="./src/img/jeff-copy.png"/>
                </a>
            </li>

            <li className="nav-link"><a href="#"><img src="./src/img/apps.png" alt="Apps" title="Apps" /></a></li>
            <li className="nav-link"><a href="#"><img src="./src/img/notifications.png" alt="Notifications" title="Notifications" /></a></li>
            <li className="nav-link"><a href="#"><img src="/src/img/help.png" alt="Help" title="Help" /></a></li>
        </ul>

// TODO: ALTER 'ALT' TO A 'PROP' OF THE USER'S NAME (ABOVE)

// TODO: BOOTSTRAP NAV BAR - IF HAVE TIME TO IMPLEMENT
      // <div>
      //     <div className="navbar-header">
      //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      //             <span className="sr-only"></span>
      //             <span className="icon-bar"></span>
      //             <span className="icon-bar"></span>
      //             <span className="icon-bar"></span>
      //         </button>
      //         <a className="navbar-brand" href="#">
      //           <img alt="Brand" src="./src/img/jeff-copy.png"/>
      //         </a>
      //     </div>
      //
      //     <div className="collapse navbar-collapse">
      //       <ul className="nav navbar-nav navbar-right">
      //         <li className="active"><a href="#">Help <span className="sr-only">(current)</span></a></li>
      //         <li><a href="#">Notifications</a></li>
      //         <li><a href="#">Apps</a></li>
      //       </ul>
      //     </div>
      // </div>

      )
    }
}




// import React from 'react';
// import Navbar from 'react-navbar';
//
// const menuItems = [
//     {
//       title: 'menu.dd1',
//
//       items: [
//           {title: 'menu.i11', href: '#'},
//           {title: 'menu.i12', href: '#'}
//       ]
//     },
//     {title: 'menu.i1', href: '#'},
//     {title: 'menu.i2', href: '#'}
// ];
//
// const secondaryMenuItems = [
//   {
//     title: 'menu.dd2',
//
//     items: [
//         {title: 'menu.i21', href: '#'},
//         {title: 'menu.i22', href: '#'}
//     ]
//   },
//   {title: 'menu.i3', href: '/#'}
// ];
//
// const localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer = {
//     menu: {
//         dd1: 'Drop-down-1', i11: 'Item-1-1', i12: 'Item-1-2',
//          i1: 'Item-1',       i2: 'Item-2',    i3: 'Item-3',
//         dd2: 'Drop-down-2', i21: 'Item-2-1', i22: 'Item-2-2'
//     }
// };
//
// React.render(
//     React.createElement(Navbar, {
//         menuItems,
//         secondaryMenuItems,
//         messages: localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer
//     }),
//     global.document.body
// );
