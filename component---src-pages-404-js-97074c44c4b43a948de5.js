;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    142: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(226)
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement('h1', null, 'NOT FOUND'),
          r.a.createElement(
            'p',
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        )
      }
    },
    173: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return m
        }),
        n.d(t, 'StaticQueryContext', function() {
          return p
        }),
        n.d(t, 'StaticQuery', function() {
          return h
        })
      var a = n(0),
        r = n.n(a),
        i = n(4),
        u = n.n(i),
        o = n(157),
        c = n.n(o)
      n.d(t, 'Link', function() {
        return c.a
      }),
        n.d(t, 'withPrefix', function() {
          return o.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return o.navigate
        }),
        n.d(t, 'push', function() {
          return o.push
        }),
        n.d(t, 'replace', function() {
          return o.replace
        }),
        n.d(t, 'navigateTo', function() {
          return o.navigateTo
        })
      var s = n(28)
      n.d(t, 'waitForRouteChange', function() {
        return s.c
      })
      var l = n(177),
        d = n.n(l)
      n.d(t, 'PageRenderer', function() {
        return d.a
      })
      var f = n(40)
      n.d(t, 'parsePath', function() {
        return f.a
      })
      var p = r.a.createContext({}),
        h = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      h.propTypes = {
        data: u.a.object,
        query: u.a.string.isRequired,
        render: u.a.func,
        children: u.a.func,
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
        i = n(4),
        u = n.n(i),
        o = n(59),
        c = n(1),
        s = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            o.a,
            Object.assign(
              { key: t.pathname, location: t, pageResources: n },
              n.json
            )
          )
        }
      ;(s.propTypes = {
        location: u.a.shape({ pathname: u.a.string.isRequired }).isRequired,
      }),
        (t.default = s)
    },
    197: function(e, t, n) {},
    226: function(e, t, n) {
      'use strict'
      var a = n(195),
        r = n(0),
        i = n.n(r),
        u = n(4),
        o = n.n(u),
        c = n(229),
        s = n.n(c),
        l = n(173),
        d = (n(197),
        function(e) {
          var t = e.children
          return i.a.createElement(l.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  s.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  i.a.createElement('html', { lang: 'en' }),
                  i.a.createElement('link', {
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
      d.propTypes = { children: o.a.node.isRequired }
      t.a = d
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-97074c44c4b43a948de5.js.map
