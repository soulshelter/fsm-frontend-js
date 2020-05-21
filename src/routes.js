import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import App from "views/App";
import Dashboard from "views/Dashboard";
import Login from "views/Login";
import Mypage from "views/Mypage";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

function routes() {
    return (
        /*
            <BrowerRouter> : HTML5의 history API를 활용하여 UI를 업데이트
            <HashRouter> : URL의 Hash를 활용한 라우터
            <Swith> : <Route> 관리, 내부에 <Route>를 넣어 사용
            <Route> : 요청뱓은 path에 해당하는 컴포넌트를 렌더링, exact를 사용하여 path가 완전히 동일할경우 매칭 ex) <Route exact path="/app" component={App} />
            <Link> : 링크 생성
        */
        <Router>
            <Switch>
                <Route path="/app" component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/mypage" component={Mypage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/blog-post" component={BlogPostPage} />
                <Route path="/blog-posts" component={BlogPostsPage} />
                <Route path="/components" component={ComponentsPage} />
                <Route path="/contact-us" component={ContactUsPage} />
                <Route path="/ecommerce-page" component={EcommercePage} />
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/product-page" component={ProductPage} />
                <Route path="/sections" component={SectionsPage} />
                <Route path="/shopping-cart-page" component={ShoppingCartPage} />
                <Route path="/signup-page" component={SignupPage} />
                <Route path="/error-page" component={ErrorPage} />
                <Route path="/" component={PresentationPage} />
                <Redirect from="*" to="/app" />
            </Switch>
        </Router>
    )
};

export default routes;