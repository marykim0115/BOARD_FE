import React from 'react';
import styled from 'styled-components';
import AdminOnlyContainer from '../../commons/containers/AdminOnlyContainer';
import { Outlet } from 'react-router-dom';
import Header from '../../outlines/admin/Header';
import Side from '../../outlines/admin/Side';
import SubMenu from '../../outlines/admin/Submenu';

const ContentBox = styled.main`
  display: flex;
  background: #f8f8f8;
  min-height: 700px;

  aside {
    width: 220px;
    background: #d5d5d5;
  }

  section.main_content {
    flex-grow: 1;
    padding: 50px;
  }
`;

const MainLayout = () => {
  return (
    <AdminOnlyContainer>
      <Header />
      <ContentBox>
        <Side />
        <section className="main_content">
          <SubMenu />
          <Outlet />
        </section>
      </ContentBox>
    </AdminOnlyContainer>
  );
};

export default React.memo(MainLayout);
