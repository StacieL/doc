/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo4DforiOS.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('projectEditorOverview.html', language)}>4D for iOS Overview</Button>
            <Button href={docUrl('veryFirstApp.html', language)}>Create</Button>
            <Button href={docUrl('RuninSimulator.html', language)}>Test</Button>
            <Button href={docUrl('RegisterAppleDeveloperEnterpriseProgram.html', language)}>Deploy In House</Button>
            <Button href={docUrl('RegisterOrganization.html', language)}>Deploy App Store</Button>



          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => 

 (
  <Block layout="fourColumn">


    {[
      {
        content: 'Define a subset of your phisical structure to replicate',
        image: imgUrl('structure.png'),
        imageAlign: 'top',
        title: 'Structure',
      },
      {
        content: 'Choose  the layouts and the style of your app in a few steps',
        image: imgUrl('design.png'),
        imageAlign: 'top',
        title: 'Design',
      },
      {
        content: 'Create your Xcode project in one click and run your app on any iPhone',
        image: imgUrl('generateTest.png'),
        imageAlign: 'top',
        title: 'Generate & Test',
      },
      {
        content: 'Choose an in-house or App Store deployment model to distribute your app',
        image: imgUrl('deploy.png'),
        imageAlign: 'top',
        title: 'Deploy',
      },
    ]}

  </Block>

);

const FeatureCallout = props => (
  <div

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('projectEditorOverview.html', props.language)}>
          GET STARTED
        </a>

  </div>
);


const BuildYourApp = props => (

  <Block id="whiteBloc">
 
    {[
      {
        image: imgUrl('simulator.png'),
        imageAlign: 'left',
        content: 'Create various apps depending on your business needs',
        title: 'Create your iOS app from scratch',
      },
    ]}

  </Block>

);

const BuildYourAppCallout = props => (
  <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('veryFirstApp.html', props.language)}>
          CREATE YOUR APP
        </a>

  </div>
);

const TestYourApp = props => (

  <Block id="greyBloc">
 
    {[
      {
        image: imgUrl('simulator.png'),
        imageAlign: 'right',
        content: 'Test your App in the simulator or directly on your own device',
        title: 'Test your App',
      },
    ]}

  </Block>

);

const TestYourAppCallout = props => (
  <div id = "greyBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('RuninSimulator.html', props.language)}>
          TEST YOUR APP
        </a>

  </div>
);



const DeployInHouse = props => (
  <Block id="whiteBloc">

    {[
      {
        content: 'Distribute your App on the in-House',
        image: imgUrl('simulator.png'),
        imageAlign: 'left',
        title: 'Deploy in-House',
      },
    ]}
  </Block>
);

const DeployInHouseCallout = props => (
    <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('RegisterAppleDeveloperEnterpriseProgram.html', props.language)}>
        IN-HOUSE DEPLOYMENT
        </a>

  </div>
);

const DeployAppStore = props => (
  <Block id="greyBloc">

    {[
      {
        content: 'Distribute your App on the in App Store',
        image: imgUrl('simulator.png'),
        imageAlign: 'right',
        title: 'Deploy in App Store',
      },
    ]}
  </Block>
);

const DeployAppStoreCallout = props => (
    <div id = "greyBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('RegisterOrganization.html', props.language)}>
        APP STORE DEPLOYMENT
        </a>

  </div>
);



const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom" id="footerBloc">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <BuildYourApp />
          <BuildYourAppCallout/>
          <TestYourApp/>
          <TestYourAppCallout/>
          <DeployInHouse/>
          <DeployInHouseCallout/>
          <DeployAppStore/>
          <DeployAppStoreCallout/>

          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
