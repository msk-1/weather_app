// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchTempls } from '../actions';

// class Temperature extends React.Component {
//   componentDidMount() {
//     this.props.fetchTempls();
//   }

//   renderList() {
//     return (
//       <div>
//         { this.props.val }
//       </div>
//     )
//   }
//   render() {
//     return <div>{ this.renderList() }</div>
//   }
// };

// const mapStateToProps = (state) => {
//   console.log(state)
//   return { val: state.weathers[0] };
// }

// export default connect(mapStateToProps, { fetchTempls: fetchTempls })(Temperature);