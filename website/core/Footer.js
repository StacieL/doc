/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('projectEditorOverview.html', this.props.language)}>
              4D for iOS Overview
            </a>
            <a href={this.docUrl('veryFirstApp.html', this.props.language)}>
              Create Your first iOS App
            </a>
            <a href={this.docUrl('RuninSimulator.html', this.props.language)}>
              Test your App
            </a>
            <a href={this.docUrl('RegisterAppleDeveloperEnterpriseProgram.html', this.props.language)}>
              Deploy in-House
            </a>
            <a href={this.docUrl('RegisterOrganization.html', this.props.language)}>
              Deploy on App Store
            </a>
          </div>
<div>          </div>

          <div>
            <h5>More</h5>
            <a
              href="https://blog.4d.com/tag/4d-for-ios/"
              target="_blank"
              rel="noreferrer noopener">
              Blog
            </a>
            <a
              href="https://twitter.com/4dtweets"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a href="https://github.com/DavAz4D/doc">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
               
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
