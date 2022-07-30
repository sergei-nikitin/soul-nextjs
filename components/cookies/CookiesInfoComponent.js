import s from './CookiesInfoComponent.module.scss';

const contentCookiesPolicy = {
  name: {title: 'Cookies Policy'},
  paragraphs: [
    {
      title: 'What are cookies?',
      content: <p>Cookies are small files that some websites can install in their devices or computer terminals and
        which constitute procedures for automatically collecting information on Internet users during their visit to a
        given website in order to, among other activities, recognize them as return visitors and accordingly personalize
        their experience, provide faster browsing, collect statistical information, and/or store preferences and
        browsing habits. Cookies are useful because they allow websites to better tailor their functioning to user
        preferences and help the managers of websites to improve the services offered using the information collected
        through cookies.
      </p>
    },
    {
      title: 'Types of cookies',
      content: <p> Strictly Necessary Cookies: These cookies are necessary for the website to function and cannot be
        switched off in our systems. They are usually only set in response to actions made by you which amount to a
        request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your
        browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies
        do not store any personally identifiable information.<br/>
        <br/>
        Performance Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve
        the performance of our site. They help us to know which pages are the most and least popular and see how
        visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If
        you do not allow these cookies we will not know when you have visited our site and will not be able to monitor
        its performance.<br/>
        <br/>
        Functional Cookies: These cookies enable the website to provide enhanced functionality and personalization. They
        may be set by us or by third party providers whose services we have added to our pages. If you do not allow
        these cookies then some or all of these services may not function properly.<br/>
        <br/>
        Targeting Cookies: These cookies may be set through our site by our advertising partners. They may be used by
        those companies to build a profile of your interests and show you relevant adverts on other sites. They do not
        store directly personal information but are based on uniquely identifying your browser and internet device. If
        you do not allow these cookies, you will experience less targeted advertising.<br/>
        <br/>
        Social Media Cookies: These cookies are set by a range of social media services that we have added to the site
        to enable you to share our content with your friends and networks. They are capable of tracking your browser
        across other sites and building up a profile of your interests. This may impact the content and messages you see
        on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing
        tools.
      </p>
    },
    {
      title: 'Cookies used on our Website',
      content: <p>In this privacy policy your “personal data” means information or pieces of information relating to you
        or that could allow you to be directly or indirectly identified. We may collect personal data about you from
        different sources, including collecting personal data: (i) from you directly; (ii) when you visit the Site; and
        (iii) from other sources.<br/>
        <br/>
        The types of personal data we may collect from you directly include your:<br/>
        Name<br/>
        Phone number
      </p>
    },
  ]
}
const contentPrivacyPolicy = {
  name: {title: 'Privacy Policy'},
  paragraphs: [
    {
      title: 'Introduction',
      content: <p>We is committed to safeguarding your privacy and ensuring that your personal data is protected. This
        privacy policy applies to our websites www._______.com<br/>
        Your Consent To This Privacy Policy
        By using the Site, you are agreeing to the terms of this privacy policy. If you do not agree with any term in
        this policy, please do not use the Site.</p>
    },
    {
      title: 'How We Use Your Personal Data',
      content: <p>In this privacy policy your “personal data” means information or pieces of information relating to you
        or that could allow you to be directly or indirectly identified. We may collect personal data about you from
        different sources, including collecting personal data: (i) from you directly; (ii) when you visit the Site; and
        (iii) from other sources.<br/><br/>

        The types of personal data we may collect from you directly include your:<br/>
        Name<br/>
        Phone number
      </p>
    },
    {
      title: 'What are cookieCookies used on our Website',
      content: <p>Subject to your prior consent where required under applicable Data Protection Laws, we may use your
        personal data:<br/>
        <br/>
        To process your application<br/>
        To provide the services<br/>
        To respond to your queries or comments<br/>
        For the purposes of promotion, prize draws or competitions that you have entered<br/>
        To send you products or samples that you have requested<br/>
        To evaluate the use of our websites, products and services and understand your browsing and shopping habits<br/>
        To make product recommendations to you<br/>
        To carry out analytics and market research<br/>
        To analyse the effectiveness of our advertisements<br/>
        To profile your purchases of products<br/>
        To prevent or detect fraud or other crimes and/or verify your identity<br/>
        To verify/check your credit/payment status<br/>
        To process payment instructions<br/>
      </p>
    }, {
      title: 'Marketing Messages',
      content: <p>We may send you, by post, email, SMS or push notification details of products, services, special
        offers, promotions and other information that we think may be of interest to you based on your previous
        purchases and information you have given to us. From time to time we may also contact you for customer research
        purposes. You may unsubscribe from such communications at any time, by unsubscribing in the ‘My Account’ section
        of our websites, via the unsubscribe link that you will find at the bottom of every marketing email we send
      </p>
    },
  ]
}

const CookiesInfoComponent = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h3>{contentCookiesPolicy.name.title}</h3>
        {contentCookiesPolicy.paragraphs.map((paragraph, index) => (
          <>
            <h4>{`${index + 1}. ${paragraph.title}`}</h4>
            {paragraph.content}
          </>
        ))}
      </div>
    </div>
  );
};

export default CookiesInfoComponent;
