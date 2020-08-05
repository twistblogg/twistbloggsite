exports.createPages = async ({ actions, graphql}) => {
  const { createRedirect } = actions;
  const redirects = [
    {
  fromPath: '/2014/04/7-things-to-do-after-publishing-new-blog-post.html',
  toPath: '/blog/seo-strategies-after-publishing-contents/',
  isPermanent: true
},
{
  fromPath: '/2014/04/7-tips-to-improve-your-writing.html',
  toPath: '/blog/improve-writing-skills/',
  isPermanent: true
},
{
  fromPath: '/2014/04/8-blogging-habits-of-successful-bloggers.html',
  toPath: '/blog/pro-blogging-habits/',
  isPermanent: true
},
{
  fromPath: '/2014/02/add-author-box-below-posts-in-blogger.html',
  toPath: '/blog/author-box-for-blogger/',
  isPermanent: true
},
{
  fromPath: '/2019/09/add-beautiful-html-sitemap-page-in-blogger.html',
  toPath: '/blog/html-sitemap-page-blogger/',
  isPermanent: true
},
{
  fromPath: '/2015/03/add-blogger-contact-form-to-static-pages.html',
  toPath: '/blog/simple-blogger-contact-form',
  isPermanent: true
},
{
  fromPath: '/2015/08/add-contact-form-to-blogger-pages.html',
  toPath: '/blog/premium-contact-page-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/simple-email-subscription-box-for-blogger.html',
  toPath: '/blog/elegant-email-subscription-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/07/how-to-create-beautiful-animated-hero.html',
  toPath: '/blog/blogger-footer-animation',
  isPermanent: true
},
{
  fromPath: '/2019/09/best-premium-blogger-templates.html',
  toPath: '/blog/premium-blogger-templates',
  isPermanent: true
},
{
  fromPath: '/2014/03/understanding-nofollow-and-dofollow-tag.html',
  toPath: '/blog/nofollow-dofollow-tags',
  isPermanent: true
},
{
  fromPath: '/2014/04/what-is-difference-between-blog-and-website.html',
  toPath: '/blog/blog-vs-website',
  isPermanent: true
},
{
  fromPath: '/2014/01/windows-7-exe-file-association-fix.html',
  toPath: '/blog/windows7-file-association-fix',
  isPermanent: true
},
{
  fromPath: '/2014/02/top-5-best-free-plagiarism-checker-tools.html',
  toPath: '/blog/plagiarism-checking-tool',
  isPermanent: true
},
{
  fromPath: '/2014/02/top-5-free-seo-testing-tools.html',
  toPath: '/blog/seo-testing-tool',
  isPermanent: true
},
{
  fromPath: '/2014/03/things-to-know-before-you-buy-domain.html',
  toPath: '/blog/guide-for-choosing-domains',
  isPermanent: true
},
{
  fromPath: '/2014/02/top-5-must-do-seo-things-before-publishing-your-articles.html',
  toPath: '/blog/seo-before-publishing-articles',
  isPermanent: true
},
{
  fromPath: '/2014/03/seo-top-5-link-building-methods.html',
  toPath: '/blog/link-building-methods',
  isPermanent: true
},
{
  fromPath: '/2019/09/show-published-and-last-updated-date-in-blogger-post.html',
  toPath: '/blog/last-updated-date-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/08/adsense-ready-premium-blogger-templates.html',
  toPath: '/blog/ads-ready-blogger-templates',
  isPermanent: true
},
{
  fromPath: '/2020/06/creative-blogger-themes.html',
  toPath: '/blog/creative-blogger-themes',
  isPermanent: true
},
{
  fromPath: '/2019/11/css-puns-web-design-jokes.html',
  toPath: '/blog/crazy-css-puns',
  isPermanent: true
},
{
  fromPath: '/2019/11/lazy-load-images-in-blogger.html',
  toPath: '/blog/lazy-loading-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/09/customize-default-label-cloud-in-blogger.html',
  toPath: '/blog/customize-label-cloud-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/08/customize-default-label-in-blogger.html',
  toPath: '/blog/customize-label-list-blogger',
  isPermanent: true
},
{
  fromPath: '/2016/01/premium-seo-optimized-blogger-template.html',
  toPath: '/blog/seo-optimized-blog-themes',
  isPermanent: true
},
{
  fromPath: '/2019/12/premium-amp-blogger-templates.html',
  toPath: '/blog/premium-amp-blogger-templates',
  isPermanent: true
},
{
  fromPath: '/2019/07/scary-blogger-template-free-download.html',
  toPath: '/blog/scary-blogger-template',
  isPermanent: true
},
{
  fromPath: '/2014/01/Disable-Copy-Text-Selection-On-Blogger.html',
  toPath: '/blog/disable-copy-function-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/09/display-estimated-post-reading-time-in-blogger-posts.html',
  toPath: '/blog/estimated-reading-time-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/03/Best-Tools-For-Bloggers-To-Correct-Grammatical-Mistakes.html',
  toPath: '/blog/correct-grammatical-mistakes-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/03/blogger-search-preferences-settings-seo.html',
  toPath: '/blog/blogger-search-preferences-setting',
  isPermanent: true
},
{
  fromPath: '/2018/08/add-stylish-sitemap-to-blogspot.html',
  toPath: '/blog/stylish-pro-sitemap-blogger',
  isPermanent: true
},
{
  fromPath: '/2016/01/best-facebook-tips-and-tricks.html',
  toPath: '/blog/crazy-facebook-tricks',
  isPermanent: true
},
{
  fromPath: '/2015/03/how-to-customize-blogger-scrollbar-and.html',
  toPath: '/blog/customize-scrollbar-and-text-selection-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/08/how-to-customize-comment-box-in-blogger.html',
  toPath: '/blog/customize-comment-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/03/how-to-customize-comments-avatar-image-in-blogger.html',
  toPath: '/blog/customize-comment-avatar-image-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/03/change-0-comments-post-comment-message-blogger.html',
  toPath: '/blog/customize-comment-message-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/03/creative-404-error-page-setup-for-blogger-blog.html',
  toPath: '/blog/setup-error-page-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/attractive-custom-error-page-design-for-blogger.html',
  toPath: '/blog/attractive-error-page-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/09/fix-disqus-commenting-system-issues.html',
  toPath: '/blog/disqus-comment-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/08/wordpress-like-email-subscription-box-for-blogger.html',
  toPath: '/blog/wordpress-like-email-box-for-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/04/twistblogg-v2-blogger-template.html',
  toPath: '/blog/twistblogg-v2-template',
  isPermanent: true
},
{
  fromPath: '/2020/06/use-github-for-hosting-files.html',
  toPath: '/blog/use-github-for-hosting-files',
  isPermanent: true
},
{
  fromPath: '/2014/02/stylish-subscription-box-wiidget-to-blogger-sidebar.html',
  toPath: '/blog/stylish-subscription-box-blogger-sidebar',
  isPermanent: true
},
{
  fromPath: '/2019/11/test-storage-devices-for-originality.html',
  toPath: '/blog/test-storage-device-originality',
  isPermanent: true
},
{
  fromPath: '/2018/07/stylish-subscription-box-widget-for-blogger-with-social-buttons.html',
  toPath: '/blog/email-box-with-social-buttons-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/03/stylish-sidebar-subscription-box-widget-for-blogger.html',
  toPath: '/blog/stylish-email-subscription-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/01/how-to-get-google-to-index-new-blog-site-articles-quickly.html',
  toPath: '/blog/fast-indexing-of-blog-in-google',
  isPermanent: true
},
{
  fromPath: '/2014/01/How-To-Add-Meta-Tags-To-Blogger-Posts.html',
  toPath: '/blog/meta-tags-in-blogger-posts',
  isPermanent: true
},
{
  fromPath: '/2014/04/how-to-add-google-analytics-on-blogger.html',
  toPath: '/blog/add-analytics-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/01/How-To-Use-FontAwesome-Icons-In-Blogger.html',
  toPath: '/blog/install-fontawesome-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/08/stylish-email-subscription-box-widget-for-blogger.html',
  toPath: '/blog/simple-email-box-for-blogger-pages',
  isPermanent: true
},
{
  fromPath: '/2019/10/stylish-demo-and-download-buttons-for-blogger.html',
  toPath: '/blog/css-demo-download-buttons',
  isPermanent: true
},
{
  fromPath: '/2014/02/stylish-popular-posts-widget-with-count-box.html',
  toPath: '/blog/numbered-popular-post-widget-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/06/add-html-sitemap-page-to-blogger.html',
  toPath: '/blog/elegant-sitemap-design-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/06/add-html-signature-in-gmail-with-social-icons.html',
  toPath: '/blog/html-signature-in-gmail',
  isPermanent: true
},
{
  fromPath: '/2015/08/add-custom-social-media-share-buttons-to-blogger-posts.html',
  toPath: '/blog/premium-social-share-plugin-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/04/add-social-media-share-buttons-to-blogger.html',
  toPath: '/blog/simple-social-share-buttons-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/05/add-notification-bar-to-blogger.html',
  toPath: '/blog/sticky-notification-bar-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/04/add-night-mode-in-blogger-blog.html',
  toPath: '/blog/dark-mode-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/attractive-email-subscription-box-blogger.html',
  toPath: '/blog/attractive-email-subscription-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/08/beautiful-social-media-buttons-for-blog.html',
  toPath: '/blog/pure-css-social-buttons',
  isPermanent: true
},
{
  fromPath: '/2019/11/optimize-font-awesome-icons-for-better-web-performance.html',
  toPath: '/blog/optimize-font-awesome',
  isPermanent: true
},
{
  fromPath: '/2014/05/how-to-backup-all-blogger-blogs-with-google-takeout.html',
  toPath: '/blog/backup-all-blogger-blogs',
  isPermanent: true
},
{
  fromPath: '/2014/06/how-to-forward-gmail-emails-to-another-email-account.html',
  toPath: '/blog/email-forwarding-with-gmail',
  isPermanent: true
},
{
  fromPath: '/2015/03/how-to-embed-pdf-and-other-documents-in-blogger-posts.html',
  toPath: '/blog/embed-documents-in-blogger-posts',
  isPermanent: true
},
{
  fromPath: '/2017/02/How-To-Redirect-A-URL-To-Another-URL-In-Blogger.html',
  toPath: '/blog/address-redirection-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/08/how-to-make-embedded-videos-responsive-and-display-inside-frame.html',
  toPath: '/blog/embed-videos-beautifully-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/04/biggest-seo-mistakes.html',
  toPath: '/blog/biggest-seo-mistakes',
  isPermanent: true
},
{
  fromPath: '/2019/07/create-professional-contact-page-for-blogger.html',
  toPath: '/blog/professional-contact-page-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/05/create-custom-landing-pages-on-blogger.html',
  toPath: '/blog/landing-page-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/01/solved-data-vocabulary-schema-problem.html',
  toPath: '/blog/solve-data-vocabulay-deprecated',
  isPermanent: true
},
{
  fromPath: '/2019/09/solved-godaddy-domain-non-working-without-www.html',
  toPath: '/blog/solve-godaddy-redirection-in-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/03/responsive-author-box-with-social.html',
  toPath: '/blog/responsive-multi-author-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/responsive-floating-widget-for-blogger.html',
  toPath: '/blog/responsive-floating-share-widget-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/05/social-sharing-buttons-blogger.html',
  toPath: '/blog/lightweight-share-widget-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/10/killer-seo-guides-for-newbie-blogger.html',
  toPath: '/blog/killer-seo-guides',
  isPermanent: true
},
{
  fromPath: '/2015/04/know-how-to-prevent-auto-pagination.html',
  toPath: '/blog/prevent-auto-pagination-blogger',
  isPermanent: true
},
{
  fromPath: '/2018/09/know-if-website-is-using-wordpress.html',
  toPath: '/blog/is-it-wordpress',
  isPermanent: true
},
{
  fromPath: '/2019/11/landing-pages-templates-for-blogger.html',
  toPath: '/blog/landing-page-template-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/11/overcome-leverage-browser-caching-blogger-favicon.html',
  toPath: '/blog/leverage-browser-caching-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/08/fix-blogger-contact-form-not-working.html',
  toPath: '/blog/blogger-contact-form-not-sending-fix',
  isPermanent: true
},
{
  fromPath: '/2018/07/generate-fake-paypal-payment-proof.html',
  toPath: '/blog/generate-fake-paypal-payment-proof',
  isPermanent: true
},
{
  fromPath: '/2019/11/introduction-to-svg.html',
  toPath: '/blog/an-intro-to-svg',
  isPermanent: true
},
{
  fromPath: '/2015/04/email-subscription-popup-blogger-plugin.html',
  toPath: '/blog/feedburner-email-plugin-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/03/facebook-popup-like-box-to-blogger-cookies-enabled.html',
  toPath: '/blog/facebook-popup-page-plugin',
  isPermanent: true
},
{
  fromPath: '/2015/04/floating-social-media-share-buttons-bar-blogger-total-share-count.html',
  toPath: '/blog/floating-share-button-with-count-blogger',
  isPermanent: true
},
{
  fromPath: '/2014/04/horizontal-subscription-box-widget-for-blogger.html',
  toPath: '/blog/cute-horizontal-email-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/07/new-stylish-sidebar-subscription-box-widget-for-blogger.html',
  toPath: '/blog/stylish-email-sidebar-box-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/04/new-elegant-popular-posts-widget-for-blogger.html',
  toPath: '/blog/elegant-popular-post-design-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/09/popular-posts-widget-with-rating-for-blogger.html',
  toPath: '/blog/popular-post-widget-with-rating-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/06/lightweight-syntax-highlighter-blogger.html',
  toPath: '/blog/lightweight-syntax-highlighter-blogger',
  isPermanent: true
},
{
  fromPath: '/2019/10/multi-author-box-with-social-links-blogger.html',
  toPath: '/blog/pro-multi-author-widget-blogger',
  isPermanent: true
},
{
  fromPath: '/2015/05/floating-social-share-bar-widget-for.html',
  toPath: '/blog/floating-social-plugin-for-blogger',
  isPermanent: true
},
{
  fromPath: '/2020/01/speed-up-page-loading-time.html',
  toPath: '/blog/improve-page-loading-time',
  isPermanent: true
},
{
  fromPath: '/2020/05/decrease-page-loading-time.html',
  toPath: '/blog/improve-page-loading-time',
  isPermanent: true
},
{
  fromPath: '/2019/10/premium-blogger-plugins-series.html',
  toPath: '/blog/tags/blog-widgets',
  isPermanent: true
},
];

redirects.forEach(redirect => createRedirect(redirect));
}

