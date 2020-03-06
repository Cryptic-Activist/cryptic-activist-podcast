import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  SubNavigatorBar,
  Ul,
  Li,
  CategoryLinkTo,
  Separator,
} from '../../../styles/Components/UI/Navbar/subnavbar-category.styled-components';

import * as BlogActions from '../../../store/actions/blog/categories';

const mapStateToProps = (state) => {
  const {
    blogCategories,
  } = state;
  return {
    blogCategories,
  }
}

const SubNavBarCategory = (props) => {
  const {
    blogCategories,
  } = props;

  console.log('blogCategories:', props)

  return (
    // <>
    //   <SubNavigatorBar>
    //     <Container className="container">
    //       <div className="row">
    //         <div className="col-12">
    //           {/* {subNavMenu} */}
    //           <Ul>
    //             {blogCategories.data.map((category) => (
    //               <Li
    //                 key={category}
    //               >
    //                 <CategoryLinkTo to={`/blog/category/${category}`}>
    //                   {category}
    //                 </CategoryLinkTo>
    //               </Li>
    //             ))}
    //           </Ul>
    //         </div>
    //       </div>
    //     </Container>
    //   </SubNavigatorBar>
    // </>
    <>

    </>
  );
};

export default connect(mapStateToProps)(SubNavBarCategory);
