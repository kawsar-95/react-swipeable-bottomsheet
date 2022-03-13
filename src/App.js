// import React from 'react';
// import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false
//     };
//   };

//   openBottomSheet(open) {
//     this.setState({ open });
//   };

//   toggleBottomSheet() {
//     this.openBottomSheet(!this.state.open);
//   };

//   render() {
//     const styles = {
//       title: {
//         backgroundColor: '#00bcd4',
//         padding: '16px 0',
//         boxSizing: 'border-box',
//         color: 'white',
//         minHeight: '64px',
//         fontSize: '24px',
//         textAlign: 'center',
//         flex: 1
//       },
//       text: {
//         padding: '10px',
//         boxSizing: 'border-box',
//         backgroundColor: 'white',
//         fontSize: '18px',
//         minHeight: '50vh'
//       }
//     };

//     return (
//       <div>
//         <SwipeableBottomSheet
//           overflowHeight={64}
//           open={this.state.open}
//           onChange={this.openBottomSheet.bind(this)}
//         >
//           <div style={styles.title}>
//             Controlled bottom sheet&nbsp;
//             <button onClick={this.toggleBottomSheet.bind(this)}>
//               {this.state.open ? 'Close' : 'Open'}
//             </button>
//           </div>
//           <div style={styles.text}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
//             deserunt mollit anim id est laborum.
//           </div>
//         </SwipeableBottomSheet>
//       </div>
//     );
//   }
// };

// export default App;

// componentDidMount() turns to useEffect

import React, { useState } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

const App = (props) => {
  const [open, setIsOpen] = useState(false);

  const openBottomSheet = (openButton) => {
    setIsOpen(openButton)
  }
  const toggleBottomSheet = () => {
    openBottomSheet(!open);
  };

  const styles = {
    title: {
      backgroundColor: '#00bcd4',
      padding: '16px 0',
      boxSizing: 'border-box',
      color: 'white',
      minHeight: '64px',
      fontSize: '24px',
      textAlign: 'center',
      flex: 1
    },
    text: {
      padding: '10px',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      fontSize: '18px',
      minHeight: '85vh'
    }
  };
  return (
    <div>
      <div>
        <SwipeableBottomSheet
          overflowHeight={64}
          open={open}
          onChange={openBottomSheet}
        >
          <div style={styles.title}>
            Controlled bottom sheet&nbsp;
            <button onClick={toggleBottomSheet}>
              {open ? 'Close' : 'Open'}
            </button>
          </div>
          <div style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, facere iusto numquam accusamus necessitatibus accusantium sit aperiam tenetur cumque vel illo expedita maxime quae dolore fuga animi. Magni aliquam accusantium doloremque quasi iste voluptatibus architecto. Ex laborum dolor officiis praesentium iusto velit obcaecati sunt iste in deserunt nisi, modi, aliquam doloremque accusantium itaque quisquam, minima laboriosam ad animi repellendus. Ipsum qui impedit nemo minus, tempora quidem eveniet. Asperiores soluta, debitis exercitationem eligendi eius sit cumque tenetur eveniet quasi magnam libero obcaecati non tempora alias excepturi! Sint aliquid optio, consequuntur, earum temporibus perferendis non autem qui ea veniam vero exercitationem?
          </div>
        </SwipeableBottomSheet>
      </div>
    </div>

  )
}

export default App