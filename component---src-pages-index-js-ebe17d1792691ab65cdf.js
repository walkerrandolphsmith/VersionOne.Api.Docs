;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    144: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(8),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        l = n(226),
        c = (n(80), n(38), n(83), n(81), n(53), n(27), n(283)),
        s = n.n(c),
        u = (n(82), n(451)),
        p = function(e) {
          var t =
            e.content ||
            "Sorry we don't have an example yet! Fork our repo and help us document"
          return i.a.createElement(
            'div',
            { style: { 'padding-top': '10px', width: '100%' } },
            i.a.createElement('div', { dangerouslySetInnerHTML: { __html: t } })
          )
        },
        d = function(e) {
          var t = ['bash', 'js', 'python', 'csharp']
            .map(function(t) {
              var n = e.sdkSubsections.find(function(e) {
                return e.langFileName.indexOf(t) >= 0
              })
              return { lang: t, html: n.html }
            })
            .map(function(e) {
              return {
                label: 'js' === e.lang ? 'javascript' : e.lang,
                content: i.a.createElement(p, { content: e.html }),
              }
            })
          return i.a.createElement(u.a, {
            tabs: t,
            onSelect: function(e, t) {
              return console.log('Selected Tab', t + 1)
            },
          })
        },
        m = n(248),
        h = function(e) {
          var t = e.data.allMarkdownRemark.edges.map(function(e) {
              var t = e.node,
                n = t.fileAbsolutePath,
                a = t.html,
                r = n.split('markdown-pages')[1],
                o = r.slice(1, r.length).split('/')
              return {
                group: o[0],
                section: o[1],
                filename: o[2],
                html: a,
                langFileName: o[3],
              }
            }),
            a = t
              .map(function(e) {
                return Object.assign({}, e, {
                  sdkSubsections: t.filter(function(t) {
                    return (
                      t.group === e.group &&
                      t.section === e.section &&
                      Boolean(t.langFileName)
                    )
                  }),
                })
              })
              .filter(function(e) {
                return !Boolean(e.langFileName)
              })
              .filter(function(e) {
                return 'index.md' !== e.section
              }),
            r = s()(a, 'group')
          return m.map(function(e) {
            var a = e.title,
              o = e.path,
              l = r[o],
              c = s()(l, 'section'),
              u = []
            try {
              u = n(249)('./' + o + '/order')
            } catch (e) {}
            var p = u.map(function(e) {
                e.title
                var t = e.path,
                  n = c[t].find(function(e) {
                    return 'index.md' == e.filename
                  }),
                  a = n.html,
                  r = n.sdkSubsections
                return i.a.createElement(
                  'div',
                  { key: o + '-' + t, id: o + '-' + t, className: 'section' },
                  i.a.createElement('div', {
                    dangerouslySetInnerHTML: { __html: a },
                  }),
                  i.a.createElement(d, { sdkSubsections: r })
                )
              }),
              m = t.find(function(e) {
                return e.group === o && 'index.md' === e.section
              })
            return i.a.createElement(
              'div',
              { key: o, className: 'group' },
              i.a.createElement('h1', { id: o }, a),
              i.a.createElement('div', {
                dangerouslySetInnerHTML: { __html: m.html },
              }),
              p
            )
          })
        },
        f = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), r = 0;
              r < n;
              r++
            )
              a[r] = arguments[r]
            return (
              ((t =
                e.call.apply(e, [this].concat(a)) ||
                this).onScroll = function() {}),
              t
            )
          }
          r()(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function() {
              window.addEventListener('scroll', this.onScroll)
            }),
            (n.componentWillUnmount = function() {
              window.removeEventListener('scroll', this.onScroll)
            }),
            (n.render = function() {
              return i.a.createElement(h, this.props)
            }),
            t
          )
        })(i.a.Component),
        g = n(422),
        v = n.n(g),
        y = n(449),
        b = n(426),
        E = n(445),
        k = n(270),
        S = n(453),
        C = n(446),
        w = n(423),
        x = n.n(w),
        q = n(450),
        T = (n(84), n(85), n(374)),
        F = n(447),
        O = n(448),
        I = n(425),
        P = n(355),
        A = n.n(P)
      document.getElementsByTagName('body')[0]
      var D = (function(e) {
          function t(t, n) {
            var a
            return (
              ((a = e.call(this, t, n) || this).close = function() {
                return a.setState({ modals: [] })
              }),
              (a.open = function() {
                return a.setState({ modals: [1] })
              }),
              (a.onUrlChange = function(e) {
                a.setState({ url: e })
              }),
              (a.onTokenChange = function(e) {
                a.setState({ token: e })
              }),
              (a.onAvatarSrcChange = function(e) {}),
              (a.onSave = function() {
                var e = a.state,
                  t = e.url,
                  n = e.token,
                  r = t.split('://'),
                  o = r[0],
                  i = r[1],
                  l = o.indexOf('s') > 0,
                  c = l ? 443 : 80,
                  s = i.split('/'),
                  u = {
                    token: n,
                    host: s[0],
                    instance: s[1],
                    port: c,
                    isHttps: l,
                  }
                A()({
                  url: 'http://localhost:3000',
                  method: 'post',
                  data: u,
                  headers: { 'Content-Type': 'application/json' },
                })
                  .then(function(e) {
                    var t = 'data:image/gif;base64,' + e.data.src
                    localStorage.setItem('avatarSrc', t),
                      a.setState({ avatarSrc: t }),
                      a.close()
                  })
                  .catch(function(e) {
                    console.log(e)
                  })
              }),
              (a.state = {
                modals: [],
                url: 'https://www7.v1host.com/V1Production',
                token: '1.E3xealNBIcT4YV7qIIGIS+LPfJY=',
                avatarSrc: localStorage.getItem('avatarSrc') || '',
              }),
              a
            )
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  T.b,
                  null,
                  this.state.modals.map(function(t) {
                    return i.a.createElement(
                      F.a,
                      {
                        key: t,
                        heading: 'VersionOne Instance',
                        onClose: e.close,
                        actions: [
                          { text: 'Save', onClick: e.onSave },
                          { text: 'Close', onClick: e.close },
                        ],
                      },
                      i.a.createElement(I.a, {
                        autoFocus: !0,
                        name: 'url',
                        placeholder: 'VersionOne Url',
                        value: e.state.url,
                        onChange: e.onUrlChange,
                        shouldFitContainerboolean: !0,
                      }),
                      i.a.createElement(I.a, {
                        name: 'token',
                        placeholder: 'Access Token',
                        value: e.state.token,
                        onChange: e.onTokenChange,
                        shouldFitContainerboolean: !0,
                      })
                    )
                  })
                ),
                i.a.createElement(
                  q.a,
                  { position: 'right', content: 'User profile' },
                  i.a.createElement(O.a, {
                    onClick: this.open,
                    src: this.state.avatarSrc,
                    size: 'small',
                    borderColor: 'transparent',
                  })
                )
              )
            }),
            t
          )
        })(i.a.Component),
        M = n(420),
        N = n.n(M),
        L = function() {
          return i.a.createElement('img', { alt: 'nucleus', src: N.a })
        },
        _ = {
          background: {
            primary: '#31363e',
            secondary: '#0747A6',
            tertiary: '#0747A6',
          },
          text: '#DEEBFF',
          subText: '#B3D4FF',
          keyline: 'rgba(9, 30, 66, 0.42)',
          item: {
            default: { background: 'transparent' },
            hover: { background: 'rgba(9, 30, 66, 0.42)' },
            active: { background: '#2684FF' },
            selected: { background: 'rgba(9, 30, 66, 0.25)' },
            focus: { outline: '#4C9AFF' },
            dragging: { background: 'black' },
          },
          dropdown: {
            default: { background: 'rgba(9, 30, 66, 0.42)' },
            hover: { background: 'rgba(9, 30, 66, 0.48)' },
            active: { background: '#2684FF' },
            selected: { background: 'rgba(9, 30, 66, 0.25)' },
            focus: { outline: '#4C9AFF' },
          },
        },
        z = n(248),
        R = (function(e) {
          function t(t, n) {
            var a
            return (
              ((a = e.call(this, t, n) || this).state = { selected: '' }), a
            )
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this,
                t =
                  this.props.containerHeaderComponent ||
                  function() {
                    return null
                  },
                a = z.map(function(t, a) {
                  var r = t.title,
                    o = t.path,
                    l = []
                  try {
                    l = n(249)('./' + o + '/order')
                  } catch (e) {}
                  console.log('selected: ', e.state.selected)
                  var c =
                    l.length > 0 &&
                    i.a.createElement(
                      y.a,
                      null,
                      l.map(function(t, n) {
                        var a = t.title,
                          r = t.path
                        return i.a.createElement(b.a, {
                          key: n,
                          text: a,
                          href: '#' + o + '-' + r,
                          onClick: function() {
                            e.setState({ selected: o + '-' + r })
                          },
                          isSelected: e.state.selected === o + '-' + r,
                        })
                      })
                    )
                  return i.a.createElement(
                    'div',
                    { className: '', key: o },
                    i.a.createElement(b.a, {
                      text: r,
                      href: '#' + o,
                      onClick: function() {
                        e.setState({ selected: '' + o })
                      },
                      isSelected: e.state.selected === '' + o,
                    }),
                    c
                  )
                })
              return i.a.createElement(
                E.a,
                {
                  globalTheme: _,
                  containerHeaderComponent: function() {
                    return i.a.createElement(
                      'div',
                      { className: e.props.isOpen ? '' : 'hidden' },
                      i.a.createElement(t, null)
                    )
                  },
                  globalPrimaryIcon:
                    !this.props.isOpen && this.props.globalPrimaryIcon,
                  globalPrimaryItemHref: '//',
                  globalSecondaryActions: [
                    i.a.createElement(k.a, null, i.a.createElement(D, null)),
                  ],
                  isOpen: this.props.isOpen,
                  onResize: this.props.resize,
                  globalPrimaryActions: [
                    i.a.createElement(
                      k.a,
                      { size: 'medium' },
                      i.a.createElement(
                        q.a,
                        { position: 'right', content: 'Search' },
                        i.a.createElement(v.a, {
                          label: 'Search icon',
                          secondaryColor: 'inherit',
                          size: 'medium',
                        })
                      )
                    ),
                    i.a.createElement(
                      k.a,
                      { size: 'medium' },
                      i.a.createElement(
                        q.a,
                        { position: 'right', content: 'Community Site' },
                        i.a.createElement(x.a, {
                          onClick: function() {
                            return (window.location =
                              'https://community.versionone.com/VersionOne_Connect/Developer_Library/Sample_Code/Explore_API_Endpoints')
                          },
                          label: 'Community icon',
                          secondaryColor: 'inherit',
                          size: 'medium',
                        })
                      )
                    ),
                  ],
                },
                i.a.createElement(
                  'div',
                  { className: this.props.isOpen ? 'links' : 'links hidden' },
                  a
                )
              )
            }),
            t
          )
        })(i.a.Component)
      R.defaultProps = {
        globalPrimaryIcon: i.a.createElement(L, {
          label: 'Main icon',
          size: 'large',
        }),
        containerHeaderComponent: function() {
          return i.a.createElement(S.a, {
            href: '#',
            icon: i.a.createElement(L, null),
            text: 'VersionOne',
            subText: 'API docs',
          })
        },
      }
      var U = (function(e) {
        function t(t, n) {
          var a
          return ((a = e.call(this, t, n) || this).state = { isLoading: !0 }), a
        }
        r()(t, e)
        var n = t.prototype
        return (
          (n.componentDidMount = function() {
            var e = this
            setTimeout(function() {
              return e.setState({ isLoading: !1 })
            }, 500)
          }),
          (n.render = function() {
            return this.state.isLoading
              ? i.a.createElement(
                  C.a,
                  Object.assign({}, this.props, {
                    isCollapsed: !1,
                    globalTheme: _,
                  })
                )
              : i.a.createElement(R, this.props)
          }),
          t
        )
      })(i.a.Component)
      n.d(t, 'query', function() {
        return H
      })
      var j = (function(e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).resize = function(e) {
                n.setState({ isOpen: e.isOpen })
              }),
              (n.state = { isOpen: !0 }),
              n
            )
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data,
                t = this.state.isOpen ? 'content open' : 'content'
              return i.a.createElement(
                l.a,
                null,
                i.a.createElement(
                  'div',
                  { style: { display: 'flex', height: '100%' } },
                  i.a.createElement(U, {
                    isOpen: this.state.isOpen,
                    resize: this.resize,
                  }),
                  i.a.createElement(
                    'div',
                    { className: t },
                    i.a.createElement(f, { data: e })
                  )
                )
              )
            }),
            t
          )
        })(i.a.Component),
        H = '3232875281'
      t.default = j
    },
    173: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return f
        }),
        n.d(t, 'StaticQueryContext', function() {
          return m
        }),
        n.d(t, 'StaticQuery', function() {
          return h
        })
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(157),
        c = n.n(l)
      n.d(t, 'Link', function() {
        return c.a
      }),
        n.d(t, 'withPrefix', function() {
          return l.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return l.navigate
        }),
        n.d(t, 'push', function() {
          return l.push
        }),
        n.d(t, 'replace', function() {
          return l.replace
        }),
        n.d(t, 'navigateTo', function() {
          return l.navigateTo
        })
      var s = n(28)
      n.d(t, 'waitForRouteChange', function() {
        return s.c
      })
      var u = n(177),
        p = n.n(u)
      n.d(t, 'PageRenderer', function() {
        return p.a
      })
      var d = n(40)
      n.d(t, 'parsePath', function() {
        return d.a
      })
      var m = r.a.createContext({}),
        h = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      h.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      }
    },
    177: function(e, t, n) {
      var a
      e.exports = ((a = n(196)) && a.default) || a
    },
    195: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: 'Gatsby Default Starter' } } },
      }
    },
    196: function(e, t, n) {
      'use strict'
      n.r(t)
      n(38)
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        l = n(59),
        c = n(1),
        s = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            l.a,
            Object.assign(
              { key: t.pathname, location: t, pageResources: n },
              n.json
            )
          )
        }
      ;(s.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = s)
    },
    197: function(e, t, n) {},
    226: function(e, t, n) {
      'use strict'
      var a = n(195),
        r = n(0),
        o = n.n(r),
        i = n(4),
        l = n.n(i),
        c = n(229),
        s = n.n(c),
        u = n(173),
        p = (n(197),
        function(e) {
          var t = e.children
          return o.a.createElement(u.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  s.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  o.a.createElement('html', { lang: 'en' }),
                  o.a.createElement('link', {
                    rel: 'stylesheet',
                    href:
                      'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
                  })
                ),
                t
              )
            },
            data: a,
          })
        })
      p.propTypes = { children: l.a.node.isRequired }
      t.a = p
    },
    248: function(e, t) {
      e.exports = [
        { path: 'intro', title: 'Introduction' },
        { path: 'baseUrl', title: 'Base Url' },
        { path: 'authentication', title: 'Authentication' },
        { path: 'headers', title: 'HTTP Headers' },
        { path: 'errors', title: 'Errors' },
        { path: 'terminology', title: 'Terminology' },
        { path: 'attributeDefinitionSyntax', title: 'Attriubute Definitions' },
        { path: 'metav1', title: '~/meta.v1' },
        { path: 'bulk', title: '~/api/asset' },
        { path: 'queryv1', title: '~/query.v1' },
        { path: 'restv1Data', title: '~/rest-1.v1' },
        { path: 'activityStream', title: '~/api/activityStream' },
        { path: 'tags', title: '~/api/tags' },
        { path: 'loc', title: '~/loc-2.v1' },
      ]
    },
    249: function(e, t, n) {
      var a = {
        './activityStream/order': 348,
        './bulk/order': 349,
        './loc/order': 350,
        './metav1/order': 351,
        './queryv1/order': 352,
        './restv1Data/order': 353,
        './tags/order': 354,
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        var t = a[e]
        if (!(t + 1)) {
          var n = new Error("Cannot find module '" + e + "'")
          throw ((n.code = 'MODULE_NOT_FOUND'), n)
        }
        return t
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 249)
    },
    348: function(e, t) {
      e.exports = [{ title: 'query', path: 'query' }]
    },
    349: function(e, t) {
      e.exports = [
        { title: 'alias', path: 'alias' },
        { title: 'create', path: 'create' },
        { title: 'createMany', path: 'createMany' },
        { title: 'filter', path: 'filter' },
        { title: 'operation', path: 'operation' },
        { title: 'update', path: 'update' },
        { title: 'updateMany', path: 'updateMany' },
      ]
    },
    350: function(e, t) {
      e.exports = [
        { title: 'asset Types', path: 'assetTypes' },
        { title: 'attribute Definitions', path: 'attributeDefinitions' },
      ]
    },
    351: function(e, t) {
      e.exports = [
        { path: 'query', title: '~/meta.v1' },
        { path: 'queryAsset', title: '~/meta.v1/:assetType' },
      ]
    },
    352: function(e, t) {
      e.exports = [
        { title: 'asof', path: 'asof' },
        { title: 'filter', path: 'filter' },
        { title: 'find', path: 'find' },
        { title: 'group', path: 'group' },
        { title: 'page', path: 'page' },
        { title: 'query', path: 'query' },
        { title: 'sort', path: 'sort' },
        { title: 'subselect', path: 'subselect' },
        { title: 'where', path: 'where' },
        { title: 'with', path: 'with' },
      ]
    },
    353: function(e, t) {
      e.exports = [
        { title: 'create', path: 'create' },
        { title: 'update', path: 'update' },
        { title: 'query', path: 'query' },
        { title: 'operation', path: 'operation' },
      ]
    },
    354: function(e, t) {
      e.exports = [
        { title: 'query', path: 'query' },
        { title: 'all', path: 'all' },
        { title: 'remove', path: 'remove' },
        { title: 'merge', path: 'merge' },
        { title: 'search', path: 'search' },
      ]
    },
    420: function(e, t, n) {
      e.exports =
        n.p + 'static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png'
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-ebe17d1792691ab65cdf.js.map
