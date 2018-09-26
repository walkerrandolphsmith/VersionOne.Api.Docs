import React from 'react'
import SearchIcon from '@atlaskit/icon/glyph/search'
import {
  default as Navigation,
  Skeleton,
  AkContainerTitle as ContainerTitle,
  AkGlobalItem as GlobalItem,
  AkNavigationItemGroup as NavigationGroup,
  AkNavigationItem as NavigationItem,
} from '@atlaskit/navigation'
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group'
import Tooltip from '@atlaskit/tooltip'
import Avatar from './Avatar'
import logo from './../images/gatsby-icon.png'

const Logo = () => <img alt="nucleus" src={logo} />

const globalTheme = {
  background: {
    primary: '#31363e',
    secondary: '#0747A6',
    tertiary: '#0747A6',
  },
  text: '#DEEBFF',
  subText: '#B3D4FF',
  keyline: 'rgba(9, 30, 66, 0.42)',
  item: {
    default: {
      background: 'transparent',
    },
    hover: {
      background: 'rgba(9, 30, 66, 0.42)',
    },
    active: {
      background: '#2684FF',
    },
    selected: {
      background: 'rgba(9, 30, 66, 0.25)',
    },
    focus: {
      outline: '#4C9AFF',
    },
    dragging: {
      background: 'black',
    },
  },
  dropdown: {
    default: {
      background: 'rgba(9, 30, 66, 0.42)',
    },
    hover: {
      background: 'rgba(9, 30, 66, 0.48)',
    },
    active: {
      background: '#2684FF',
    },
    selected: {
      background: 'rgba(9, 30, 66, 0.25)',
    },
    focus: {
      outline: '#4C9AFF',
    },
  },
}

const orderedGroups = require('./../markdown-pages/order')

class ComplexNavigation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selected: '',
    }
  }

  static defaultProps = {
    globalPrimaryIcon: <Logo label="Main icon" size="large" />,

    containerHeaderComponent: () => (
      <ContainerTitle
        href="#"
        icon={<Logo />}
        text="VersionOne"
        subText="API docs"
      />
    ),
  }

  render() {
    const ContainerHeader = this.props.containerHeaderComponent || (() => null)

    const manyNavigationItemGroups = orderedGroups.map((group, i) => {
      const groupName = group.title
      const path = group.path

      let sections = []
      try {
        sections = require(`./../markdown-pages/${path}/order`)
      } catch (e) {}

      console.log('selected: ', this.state.selected)

      const childrenSections = sections.length > 0 && (
        <NavigationGroup>
          {sections.map((section, j) => {
            const sectionName = section.title
            const sectionPath = section.path
            return (
              <NavigationItem
                key={j}
                text={sectionName}
                href={`#${path}-${sectionPath}`}
                onClick={() => {
                  this.setState({ selected: `${path}-${sectionPath}` })
                }}
                isSelected={this.state.selected === `${path}-${sectionPath}`}
              />
            )
          })}
        </NavigationGroup>
      )

      return (
        <div className="" key={path}>
          <NavigationItem
            text={groupName}
            href={`#${path}`}
            onClick={() => {
              this.setState({ selected: `${path}` })
            }}
            isSelected={this.state.selected === `${path}`}
            //icon={childrenSections && <ChevronDownIcon />}
          />
          {childrenSections}
        </div>
      )
    })

    const Header = () => (
      <div className={this.props.isOpen ? '' : 'hidden'}>
        <ContainerHeader />
      </div>
    )

    return (
      <Navigation
        //containerTheme={this.props.presetThemes.global}
        globalTheme={globalTheme}
        containerHeaderComponent={Header}
        globalPrimaryIcon={!this.props.isOpen && this.props.globalPrimaryIcon}
        globalPrimaryItemHref="//"
        globalSecondaryActions={[
          <GlobalItem>
            <Avatar />
          </GlobalItem>,
        ]}
        isOpen={this.props.isOpen}
        onResize={this.props.resize}
        globalPrimaryActions={[
          <GlobalItem size="medium">
            <Tooltip position="right" content="Search">
              <SearchIcon
                label="Search icon"
                secondaryColor="inherit"
                size="medium"
              />
            </Tooltip>
          </GlobalItem>,
          <GlobalItem size="medium">
            <Tooltip position="right" content="Community Site">
              <PeopleGroupIcon
                onClick={() =>
                  (window.location =
                    'https://community.versionone.com/VersionOne_Connect/Developer_Library/Sample_Code/Explore_API_Endpoints')
                }
                label="Community icon"
                secondaryColor="inherit"
                size="medium"
              />
            </Tooltip>
          </GlobalItem>,
        ]}
      >
        <div className={this.props.isOpen ? 'links' : 'links hidden'}>
          {manyNavigationItemGroups}
        </div>
      </Navigation>
    )
  }
}

export default class Nav extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 500)
  }

  render() {
    return this.state.isLoading ? (
      <Skeleton {...this.props} isCollapsed={false} globalTheme={globalTheme} />
    ) : (
      <ComplexNavigation {...this.props} />
    )
  }
}
