/* eslint-disable react/jsx-no-comment-textnodes */
import AutLogo from "common/assets/image/logo.svg";
import AutLogoWhite from "common/assets/image/logo_white.svg";

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */

export const NavbarData = {
  logo: AutLogo,
  logoWhite: AutLogoWhite,
  navButtons: [
    // {
    //   // link: "https://playground.aut.id",
    //   link: "https://autlabs.typeform.com/to/i2y8pgpm",
    //   name: "Apply for Beta",
    // },
  ],
  menuItems: [
    // {
    //   label: "X",
    //   staticLink: true,
    //   target: "_blank",
    //   path: "https://x.com/aut_foundation",
    // },
    // {
    //   label: "Discord",
    //   staticLink: true,
    //   target: "_blank",
    //   path: "https://discord.gg/neHnzyBJEV",
    // },
    // {
    //   label: "Github",
    //   staticLink: true,
    //   target: "_blank",
    //   path: "https://github.com/Aut-Labs",
    // },
    // {
    //   label: "Docs",
    //   staticLink: true,
    //   target: "_blank",
    //   path: "https://docs.aut.id/",
    // },
    {
      label: "Āut Labs",
      staticLink: true,
      target: "_blank",
      path: "https://aut.gg/",
    },
    {
      label: "Hub",
      staticLink: true,
      target: "_blank",
      path: "https://hub.sbs/",
    },
    {
      label: "Docs",
      staticLink: true,
      target: "_blank",
      path: "https://docs.aut.id/",
    },
    {
      label: "Launch dApp",
      staticLink: true,
      target: "_blank",
      bold: true,
      path: "https://os.aut.id/",
    },
    // {
    //   label: "Manifesto",
    //   staticLink: true,
    //   path: "/manifesto",
    // },
    // {
    //   label: "Roadmap",
    //   staticLink: true,
    //   path: "/roadmap",
    // },
    // {
    //   label: "Ask Aut",
    //   staticLink: true,
    //   path: "/qa",
    // },
  ],
};

/* ------------------------------------ */
// OptOut data section
/* ------------------------------------ */
import animationData from "common/assets/portal.json";
import videoPlaceholderImage from "common/assets/image/placeholder-video.svg";
import expanderCircle from "common/assets/image/genesis-png.png";

export const OptOutData = {
  title: <>Do more with your DAO</>,
  subtitle: (
    <>
      Āut is a suite of DAO-native Tools that unlock the true potential of
      decentralized communities.
    </>
  ),
  link: {
    // path: "https://playground.aut.id",
    path: "https://autlabs.typeform.com/to/i2y8pgpm",
    title: "Apply for Beta",
  },
  pulseButtons: [
    {
      title: "Āut Expander",
      subtitle: (
        <>
          Expand your DAO. Add Members Roles, Interactions & Commitments at a
          contract-level - and join the Coordination Renaissance ⚖️
        </>
      ),
      x: "770",
      y: "982",
      link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    },
    {
      title: "dĀut",
      subtitle: (
        <>
          A DAO-bound. dĀut is the first permissionless, decentralized
          authentication system specifically designed for DAOs and their Members
          🤝
        </>
      ),
      x: "1059",
      y: "574",
      link: "https://docs.aut.id/v2/product-suite/daut",
    },
    {
      title: (
        <>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Āut{" "}
          </span>
          <span>ID</span>
        </>
      ),
      subtitle: (
        <>
          Own your own Identity. ĀutIDs are self-sovereign, Non-Transferable NFT
          IDs that bind each Individual to the DAOs they join. Also, a sexy
          Social Profile that lives on-chain 😎
        </>
      ),
      x: "549",
      y: "759",
      link: "https://docs.aut.id/v2/product-suite/my-autid",
    },
    {
      title: "Opt Āut - a Manifesto.",
      subtitle: (
        <>
          An open, collective Manifesto to open the <br /> Coordination
          Renaissance 👥 <br /> It lives on-chain, and it’s owned by <b>you</b>.
        </>
      ),
      x: "333",
      y: "520",
      link: "/manifesto",
    },
  ],
  portal: {
    title: "Join the Coordination Renaissance",
    animationData,
  },
  expander: {
    title: (
      <>
        Expand Your <br /> Community.
      </>
    ),
    description: (
      <>
        Your Community Members are much more than a flat 0x… address.
        <br />
        <br />
        Bring your Members’ Roles & Interactions directly on-chain, expand your
        DAO, and join the Coordination Renaissance
      </>
    ),
    image: expanderCircle.src,
    link: {
      title: "Expand your DAO",
      // path: "https://playground.aut.id/",
      path: "https://autlabs.typeform.com/to/i2y8pgpm",
    },
  },
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: expanderCircle,
  },
};

/* ------------------------------------ */
// Roadmap data section
/* ------------------------------------ */

export const RoadmapData = {
  title: (
    <>
      Āut <br /> Map
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
  items: [
    {
      title: "Q1- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q2- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q3- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q4- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
  ],
};

/* ------------------------------------ */
// Manifesto data section
/* ------------------------------------ */
import dividerImage from "common/assets/image/aut-line.svg";

export const ManifestoData = {
  title: <>Āut Manifesto</>,
  subtitle: (
    <>
      Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
  chapter: {
    divider: dividerImage,
    list: [
      {
        title: "Chapter One",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        title: "Chapter Two",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        title: "Chapter Three",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
    ],
  },
};

/* ------------------------------------ */
// Products data section
/* ------------------------------------ */

import DaoExpanderIcon from "common/assets/image/expander-icon.svg";
import dAutIcon from "common/assets/image/daut-icon.svg";
import CutImage from "common/assets/image/cut-new.svg";
import AutIDIcon from "common/assets/image/autid-icon.svg";
import FeatureIcon from "common/assets/image/feature-icon.svg";

export const ProductsData = {
  title: <>The Āut Suite</>,
  subtitle: (
    <>
      All Products in the Āut Suite are specifically designed for DAOs - and
      come as a suite of out-of-the-box products for contract-powered
      communities.
    </>
  ),
  image: CutImage.src,
  dAut: {
    title: <>dĀut</>,
    className: "no-uppercase",
    subtitle: (
      <>
        Lorem ipsum dolor <br /> sit amet, consetetur sadipscing elitr, <br />
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam
      </>
    ),
    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    subtitle3: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
  autId: {
    title: (
      <>
        Āut
        <br />
        ID
      </>
    ),
    features: [
      {
        id: 1,

        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 2,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 3,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    featureHeader: <>Key features</>,
    featureSubtitle: (
      <>
        Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed
      </>
    ),

    subtitle: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </>
    ),

    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor
      </>
    ),

    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
  daoExpander: {
    title: (
      <>
        Expand <br />
        Your <br />
        DAO <br />
        Today
      </>
    ),
    variant: "h2",

    subtitle: (
      <>
        Āut is an expandable Community Protocol, powering the next level of
        collective coordination.
      </>
    ),
    subtitle2: (
      <>
        By integrating it, you can expand your DAO contract - adding the
        concepts of Members Roles & Interactions directly on-chain. <br />{" "}
        <br />
        Assign Roles to your Community - and kick off role-based working
        routines and role-weighted governance in seconds. <br /> <br />
        There is no community like yours - create your own Standards. Opt Āut.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },

    features: [
      {
        id: 1,

        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 2,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 3,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    featureHeader: <>Key features</>,
    featureSubtitle: (
      <>
        Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed
      </>
    ),
  },
  dashboard: {
    title: (
      <>
        Das <br />
        hbo <br />
        ard
      </>
    ),
    subtitle: (
      <>
        Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr,
        sed
      </>
    ),
    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    subtitle3: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
        <bt />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
};

import dautScreen from "common/assets/image/daut-image-png.png";
import expanderScreen from "common/assets/image/expander-image-png.png";
import autIdScreen from "common/assets/image/autid-image-png.png";

export const ProductList = [
  {
    id: 1,
    isActive: true,
    icon: DaoExpanderIcon,
    title: (
      <>
        <span style={{ fontWeight: "bold" }}>Āut </span>
        <span style={{ fontFamily: "var(--fractul-regular)" }}>Expander</span>
      </>
    ),
    image: expanderScreen.src,
    link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    description: (
      <>
        Your Gateway to the Āut Ecosystem. Import any Legacy DAO Contract, from
        Moloch to Aragon & DAOStack.
        <br />
        <br />
        Expand it with Āut Expander, and give super-powers to your DAO - adding
        the concepts of Members Roles & Interactions directly on-chain, at
        contract level.
        <br />
        <br />
        Then assign Roles to your Community - and kick off role-based working &
        governance routines.
      </>
    ),
  },
  {
    id: 2,
    isActive: true,
    icon: dAutIcon,
    image: dautScreen.src,
    title: (
      <>
        <span style={{ fontFamily: "var(--fractul-regular)" }}>d</span>
        <span>Āut</span>
      </>
    ),
    link: "https://docs.aut.id/v2/product-suite/daut",
    description: (
      <>
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          A DAO-Bound
        </span>
        <br />
        A decentralized authentication system designed for DAOs & their Members.
        <br />
        <br />
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          For DAOs:
        </span>
        <br />
        Integrate it on any website, and let your Members login with their
        Wallet, & claim their Role in your DAO.
        <br />
        <br />
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          For Members:
        </span>
        <br />
        Claim your Role in the Community & create your Self-sovereign Account.
        Then use it to login all across Web3.
      </>
    ),
  },
  {
    id: 3,
    isActive: true,
    icon: AutIDIcon,
    image: autIdScreen.src,
    title: (
      <>
        <span>Āut</span>
        <span style={{ fontFamily: "var(--fractul-regular)" }}> ID</span>
      </>
    ),
    link: "https://docs.aut.id/v2/product-suite/my-autid",
    description: (
      <>
        Own your own Identity.
        <br />
        <br />
        ĀutID is self-sovereign, unique, and portable: it lets you join new
        DAOs, and log in across DAO-powered Web3 DApps.
        <br />
        <br />
        It works as a Social Profile, that keeps track of all your DAOs, Roles,
        and Experience. Each holder gets also a unique, public URL with this
        structure: https://my.aut.id/[your-pseudonym] 😎
      </>
    ),
  },
];

/* ------------------------------------ */
// Pillars data section
/* ------------------------------------ */
import Pillars from "common/assets/image/pillars.svg";
import PillarsMobile from "common/assets/image/pillars-mobile.svg";

export const PillarsData = {
  mobileImage: PillarsMobile,
  desktopImage: Pillars,
  title: "Do more with your DAO.",
  descriptions: [
    "Āut is an expandable Protocol for Role-based Membership in Web3 Communities.",
    "Create a DAO 2.0, add the native concept of Role at contract level - and join the coordination Renaissance.",
  ],
  link: {
    // src: "https://playground.aut.id",
    scr: "https://autlabs.typeform.com/to/i2y8pgpm",
    label: "Āut Expander Playground >",
  },
};

/* ------------------------------------ */
// QA data section
/* ------------------------------------ */

export const QAData = {
  title: (
    <>
      ASK <br /> ĀUT
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  faqs: [
    {
      id: 1,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 2,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 3,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 4,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 5,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
  ],
  video: {
    title: "Lorem ipsum dolor sit amet, consetetur",
    subtitle: "Lorem ipsum dolor sit amet",
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
};

import AboutDoor from "common/assets/image/about-door.svg";
import AboutHuman from "common/assets/image/about-human-png.png";
import AboutDoMore from "common/assets/image/concentric-circles.svg";

export const AboutData = {
  title: (
    <>
      AB- <br /> [O/Ā]UT
    </>
  ),
  subtitles: [
    {
      title: "Definition",
      description: (
        <>
          From Greek, āut means “Self” <br /> As in Self-Sovereign, or
          Self-governance.
        </>
      ),
    },
    {
      title: "Values",
      description: (
        <>Āut is your own self. In open break with the status quo.</>
      ),
    },
    {
      title: "Wordplay",
      description: (
        <>
          It also sounds like Out & we like that. <br />
          i.e.: I got in, by getting [o/ā]ut.
        </>
      ),
    },
  ],
  definition: {
    term: "autonomy",
    noun: "noun",
    pronunciation: "au·​ton·​o·​my | \\ ȯ-ˈtä-nə-mē   \\",
    pluralTitle: "plural",
    pluralValue: "autonomies",
    defintionTitle: "Definition of",
    definitions: [
      <>
        : the quality or state of being self-governing <br />
        especially : the right of self-government <br />
        // The territory was granted autonomy.
      </>,
      <>
        : self-directing freedom, especially moral independence <br />
        // personal autonomy.
      </>,
      <>
        : autonomous, from Greek autonomos <br />
        // having its own laws
      </>,
    ],
  },
  bottom: {
    title: "Autonomy & Coordination…",
    subtitle: "…within and beyond the digital borders of a community.",
    description1: (
      <>
        Āut is my own self. My self <br />
        - outside the system
        <br />
        - outside conventions
        <br />
        - outside the status quo.
        <br />
        <br />
        Without Roles, <br />
        there is no Coordination. <br />
        Without Coordination, <br />
        there are no DAOs.
        <br />
        <br />
      </>
    ),
    paragraphHeading1: "Do more with your DAO.",
    paragraph1: (
      <>
        Āut is an extendable Protocol designed to power the next generation of
        DAOs.
        <br />
        <br />
        DAOs 2.0, if you like, or a Coordination Renaissance.
        <br />
        <br />
        Governance is much more than just voting. And DAOs can be much more than
        Smart Treasuries.
      </>
    ),
    description2: (
      <>
        Āut is an expandable Community Protocol, powering the next level of
        collective coordination in DAOs. It does so by adding Role-based
        Membership & Governance in Web3 Communities.
      </>
    ),
    paragraphHeading2: "Create your own Standard.",
    paragraph2: (
      <>
        1. Import any Legacy Contract - any DAO Type you can think of. Here’s a
        list of what Āut can already expand.
        <br />
        <br />
        2. Create Roles for your DAO directly on-chain - as easy as on Discord.
        <br />
        <br />
        3. Use our decentralized authentication system (dĀut)to let your Members
        login & claim their Role on any website.
        <br />
        <br />
        4. Create Tasks & Voting routines, and assign them to a specific Role.
        <br />
        <br />
        5. Coordinate. Coordinate. Coordinate.
        <br />
        <br />
        6. Change things. Break things.Let your actions shape your Community.
      </>
    ),
    image: AboutDoor.src,
  },
  myAut: {
    image: AboutHuman.src,
    title: "Āut is my own self. My self",
    desc1: "outside the system",
    desc2: "outside conventions",
    desc3: "outside the status quo",
  },
  roles: [
    {
      title: (
        <>
          Without <br /> Roles
        </>
      ),
    },
    {
      title: "there is no Coordination.",
    },
    {
      title: "Without Coordination",
    },
    {
      title: "there are no DAOs.",
    },
  ],
  doMore: {
    image: AboutDoMore.src,
  },
  createYourStandard: {
    image: CutImage.src,
  },
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerDiscord from "common/assets/image/discord-social.svg";
import footerX from "common/assets/image/x-social.svg";
import footerMirror from "common/assets/image/mirror-logo.svg";

export const FooterData = {
  menu: [],
  logo: AutLogo,
  mailchimpUrl:
    "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0",
  copyright: `© Āut Labs ${new Date().getFullYear()}`,
  widgets: [
    {
      id: 2,
      title: "Quick Links",
      list: [
        {
          id: 1,
          title: "About Āut",
          link: "/about",
        },
        {
          id: 3,
          title: "Github",
          target: "_blank",
          link: "https://github.com/Aut-Labs",
        },
        {
          id: 2,
          title: "Docs",
          target: "_blank",
          link: "https://docs.aut.id",
        },
        {
          id: 4,
          title: "Product Suite",
          link: "/products",
        },
        // {
        //   id: 2,
        //   title: "Manifesto",
        //   link: "/manifesto",
        // },
        // {
        //   id: 4,
        //   title: "Ask Āut",
        //   link: "/qa",
        // },
        // {
        //   id: 5,
        //   title: "RoadMap",
        //   link: "/roadmap",
        // },
      ],
    },
    // {
    //   id: 3,
    //   title: "Reach Out",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Twitter",
    //       link: "/about",
    //     },
    //     {
    //       id: 3,
    //       title: "Discord",
    //       target: "_blank",
    //       link: "https://github.com/Aut-Labs",
    //     },
    //     {
    //       id: 2,
    //       title: "Mirror",
    //       target: "_blank",
    //       link: "https://docs.aut.id",
    //     },

    //     // {
    //     //   id: 2,
    //     //   title: "Manifesto",
    //     //   link: "/manifesto",
    //     // },
    //     // {
    //     //   id: 4,
    //     //   title: "Ask Āut",
    //     //   link: "/qa",
    //     // },
    //     // {
    //     //   id: 5,
    //     //   title: "RoadMap",
    //     //   link: "/roadmap",
    //     // },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Āut Products",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Āut Expander",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    //     },
    //     {
    //       id: 2,
    //       title: "dĀut",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/daut",
    //     },
    //     {
    //       id: 3,
    //       title: "Āut ID",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/my-autid",
    //     },
    //     // {
    //     //   id: 4,
    //     //   title: "Dashboard",
    //     //   link: "/products/aut-dashboard",
    //     // },
    //   ],
    // },
  ],
  countDownWidgets: [
    {
      id: 2,
      title: "Quick Links",
      list: [
        {
          id: 3,
          title: "Github",
          target: "_blank",
          link: "https://github.com/Aut-Labs",
        },
        {
          id: 2,
          title: "Docs",
          target: "_blank",
          link: "https://docs.aut.id",
        },
        {
          id: 4,
          title: "Twitter",
          target: "_blank",
          link: "https://x.com/aut_foundation",
        },

        // {
        //   id: 2,
        //   title: "Manifesto",
        //   link: "/manifesto",
        // },
        // {
        //   id: 4,
        //   title: "Ask Āut",
        //   link: "/qa",
        // },
        // {
        //   id: 5,
        //   title: "RoadMap",
        //   link: "/roadmap",
        // },
      ],
    },
  ],
  compactWidgets: [
    {
      id: 2,
      title: "Quick Links",
      list: [
        {
          id: 1,
          title: "About Āut",
          link: "/about",
        },
        {
          id: 2,
          title: "Docs",
          target: "_blank",
          link: "https://docs.aut.id",
        },
        {
          id: 3,
          title: "Product Suite",
          link: "/products",
        },
      ],
    },
  ],
  social: [
    {
      link: "https://x.com/aut_foundation",
      icon: footerX,
      name: "X",
    },
    {
      link: "https://aut.mirror.xyz",
      icon: footerMirror,
      name: "Mirror",
    },
    {
      link: "http://discord.gg/aXJFGgcvUk",
      icon: footerDiscord,
      name: "Discord",
    },

    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
