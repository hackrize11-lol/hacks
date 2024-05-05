var nt = Object.defineProperty;
var it = (R,c,r)=>c in R ? nt(R, c, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : R[c] = r;
var I = (R,c,r)=>(it(R, typeof c != "symbol" ? c + "" : c, r),
r);
import {H as rt, T as lt, M as ct, L as dt} from "./components.1SqOv-o5.js";
import ut from "./Icon.nxt4easo.js";
import {_ as mt} from "./EnlargeableImage._x8DasQ1.js";
import {B as pt, h as ft, C as ht, D as gt, E as bt, i as vt, j as yt, F as he, K as wt, R as kt, S as _t, k as xt, T as St, l as Ct, m as Tt, q as At, r as Bt, s as Mt, V as Nt, v as Rt, x as jt, y as Pt, z as zt, A as Dt, G as Lt, H as Ot, I as It, J as Et, L as ge, g as ne, c as F, a, M as Ft, N as Ht, O as $t, P as Ut, Q as Vt, U as Je, d as De, b as A, W as Gt, X as qt, f as Xt, Y as Jt, Z as Wt, $ as Yt, a0 as Kt, a1 as Qt, a2 as Zt, a3 as eo, a4 as to, a5 as oo, a6 as ao, a7 as so, a8 as no, a9 as io, aa as ro, ab as lo, ac as co, ad as uo, ae as mo, af as po, ag as fo, ah as ho, ai as go, aj as bo, ak as vo, al as yo, am as wo, an as oe, ao as ko, ap as _o, aq as xo, ar as So, as as Co, at as To, au as Ao, av as Bo, aw as Pe, ax as Mo, ay as No, az as Ro, aA as jo, aB as Po, aC as zo, aD as Do, aE as Lo, aF as We, aG as Oo, aH as Io, aI as Eo, aJ as Fo, aK as Ye, aL as Ho, o as N, e as Ke, aM as $o, aN as Uo, p as Qe, aO as Vo, aP as Go, aQ as qo, aR as V, aS as Xo, aT as Jo, aU as be, aV as Wo, aW as Yo, aX as Ko, aY as Qo, aZ as Zo, a_ as ea, a$ as ta, b0 as oa, b1 as aa, b2 as sa, b3 as na, b4 as ia, b5 as ra, b6 as la, b7 as ca, t as K, b8 as da, b9 as ua, ba as ma, bb as pa, bc as fa, bd as ha, be as ga, bf as ba, u as C, bg as va, bh as ya, bi as wa, bj as ka, bk as _a, bl as xa, bm as Sa, bn as Ca, bo as Ta, bp as Aa, bq as Ba, br as ae, bs as Ma, bt as Na, bu as Ra, bv as ja, bw as Pa, bx as za, by as Da, bz as La, w as Q, bA as Oa, bB as se, bC as Ia, bD as Ea, bE as Fa, bF as Ha, bG as $a, bH as Ua, bI as Ze, bJ as Va, _ as Ga, bK as qa, bL as Xa, n as Ja} from "./entry.0zkQKHNg.js";
import {u as Wa} from "./useAuth.EZ9HOu1T.js";
import {u as et} from "./state.Jpt6e_m7.js";
import {P as Ya} from "./PermissionsManager.cZRH2RPW.js";
import {u as Ka} from "./vue.f36acd1f.gXySnomo.js";
import {R as Qa} from "./Request.ckaqYxoR.js";
import "./index.0wqzsba0.js";
import "./index.QHQq_OEs.js";
/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Za = ()=>{}
  , es = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: pt,
    BaseTransitionPropsValidators: ft,
    Comment: ht,
    DeprecationTypes: gt,
    EffectScope: bt,
    ErrorCodes: vt,
    ErrorTypeStrings: yt,
    Fragment: he,
    KeepAlive: wt,
    ReactiveEffect: kt,
    Static: _t,
    Suspense: xt,
    Teleport: St,
    Text: Ct,
    TrackOpTypes: Tt,
    Transition: At,
    TransitionGroup: Bt,
    TriggerOpTypes: Mt,
    VueElement: Nt,
    assertNumber: Rt,
    callWithAsyncErrorHandling: jt,
    callWithErrorHandling: Pt,
    camelize: zt,
    capitalize: Dt,
    cloneVNode: Lt,
    compatUtils: Ot,
    compile: Za,
    computed: It,
    createApp: Et,
    createBlock: ge,
    createCommentVNode: ne,
    createElementBlock: F,
    createElementVNode: a,
    createHydrationRenderer: Ft,
    createPropsRestProxy: Ht,
    createRenderer: $t,
    createSSRApp: Ut,
    createSlots: Vt,
    createStaticVNode: Je,
    createTextVNode: De,
    createVNode: A,
    customRef: Gt,
    defineAsyncComponent: qt,
    defineComponent: Xt,
    defineCustomElement: Jt,
    defineEmits: Wt,
    defineExpose: Yt,
    defineModel: Kt,
    defineOptions: Qt,
    defineProps: Zt,
    defineSSRCustomElement: eo,
    defineSlots: to,
    devtools: oo,
    effect: ao,
    effectScope: so,
    getCurrentInstance: no,
    getCurrentScope: io,
    getTransitionRawChildren: ro,
    guardReactiveProps: lo,
    h: co,
    handleError: uo,
    hasInjectionContext: mo,
    hydrate: po,
    initCustomFormatter: fo,
    initDirectivesForSSR: ho,
    inject: go,
    isMemoSame: bo,
    isProxy: vo,
    isReactive: yo,
    isReadonly: wo,
    isRef: oe,
    isRuntimeOnly: ko,
    isShallow: _o,
    isVNode: xo,
    markRaw: So,
    mergeDefaults: Co,
    mergeModels: To,
    mergeProps: Ao,
    nextTick: Bo,
    normalizeClass: Pe,
    normalizeProps: Mo,
    normalizeStyle: No,
    onActivated: Ro,
    onBeforeMount: jo,
    onBeforeUnmount: Po,
    onBeforeUpdate: zo,
    onDeactivated: Do,
    onErrorCaptured: Lo,
    onMounted: We,
    onRenderTracked: Oo,
    onRenderTriggered: Io,
    onScopeDispose: Eo,
    onServerPrefetch: Fo,
    onUnmounted: Ye,
    onUpdated: Ho,
    openBlock: N,
    popScopeId: Ke,
    provide: $o,
    proxyRefs: Uo,
    pushScopeId: Qe,
    queuePostFlushCb: Vo,
    reactive: Go,
    readonly: qo,
    ref: V,
    registerRuntimeCompiler: Xo,
    render: Jo,
    renderList: be,
    renderSlot: Wo,
    resolveComponent: Yo,
    resolveDirective: Ko,
    resolveDynamicComponent: Qo,
    resolveFilter: Zo,
    resolveTransitionHooks: ea,
    setBlockTracking: ta,
    setDevtoolsHook: oa,
    setTransitionHooks: aa,
    shallowReactive: sa,
    shallowReadonly: na,
    shallowRef: ia,
    ssrContextKey: ra,
    ssrUtils: la,
    stop: ca,
    toDisplayString: K,
    toHandlerKey: da,
    toHandlers: ua,
    toRaw: ma,
    toRef: pa,
    toRefs: fa,
    toValue: ha,
    transformVNodeArgs: ga,
    triggerRef: ba,
    unref: C,
    useAttrs: va,
    useCssModule: ya,
    useCssVars: wa,
    useModel: ka,
    useSSRContext: _a,
    useSlots: xa,
    useTransitionState: Sa,
    vModelCheckbox: Ca,
    vModelDynamic: Ta,
    vModelRadio: Aa,
    vModelSelect: Ba,
    vModelText: ae,
    vShow: Ma,
    version: Na,
    warn: Ra,
    watch: ja,
    watchEffect: Pa,
    watchPostEffect: za,
    watchSyncEffect: Da,
    withAsyncContext: La,
    withCtx: Q,
    withDefaults: Oa,
    withDirectives: se,
    withKeys: Ia,
    withMemo: Ea,
    withModifiers: Fa,
    withScopeId: Ha
}, Symbol.toStringTag, {
    value: "Module"
}));
var ze = {
    exports: {}
};
const ts = $a(es);
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
(function(R, c) {
    (function(r, e) {
        e(c, ts)
    }
    )(Ua, function(r, e) {
        const l = {
            itemsToShow: 1,
            itemsToScroll: 1,
            modelValue: 0,
            transition: 300,
            autoplay: 0,
            snapAlign: "center",
            wrapAround: !1,
            throttle: 16,
            pauseAutoplayOnHover: !1,
            mouseDrag: !0,
            touchDrag: !0,
            dir: "ltr",
            breakpoints: void 0,
            i18n: {
                ariaNextSlide: "Navigate to next slide",
                ariaPreviousSlide: "Navigate to previous slide",
                ariaNavigateToSlide: "Navigate to slide {slideNumber}",
                ariaGallery: "Gallery",
                itemXofY: "Item {currentSlide} of {slidesCount}",
                iconArrowUp: "Arrow pointing upwards",
                iconArrowDown: "Arrow pointing downwards",
                iconArrowRight: "Arrow pointing to the right",
                iconArrowLeft: "Arrow pointing to the left"
            }
        }
          , k = {
            itemsToShow: {
                default: l.itemsToShow,
                type: Number
            },
            itemsToScroll: {
                default: l.itemsToScroll,
                type: Number
            },
            wrapAround: {
                default: l.wrapAround,
                type: Boolean
            },
            throttle: {
                default: l.throttle,
                type: Number
            },
            snapAlign: {
                default: l.snapAlign,
                validator(t) {
                    return ["start", "end", "center", "center-even", "center-odd"].includes(t)
                }
            },
            transition: {
                default: l.transition,
                type: Number
            },
            breakpoints: {
                default: l.breakpoints,
                type: Object
            },
            autoplay: {
                default: l.autoplay,
                type: Number
            },
            pauseAutoplayOnHover: {
                default: l.pauseAutoplayOnHover,
                type: Boolean
            },
            modelValue: {
                default: void 0,
                type: Number
            },
            mouseDrag: {
                default: l.mouseDrag,
                type: Boolean
            },
            touchDrag: {
                default: l.touchDrag,
                type: Boolean
            },
            dir: {
                default: l.dir,
                validator(t) {
                    return ["rtl", "ltr"].includes(t)
                }
            },
            i18n: {
                default: l.i18n,
                type: Object
            },
            settings: {
                default() {
                    return {}
                },
                type: Object
            }
        };
        function _({config: t, slidesCount: n}) {
            const {snapAlign: o, wrapAround: u, itemsToShow: m=1} = t;
            if (u)
                return Math.max(n - 1, 0);
            let s;
            switch (o) {
            case "start":
                s = n - m;
                break;
            case "end":
                s = n - 1;
                break;
            case "center":
            case "center-odd":
                s = n - Math.ceil((m - .5) / 2);
                break;
            case "center-even":
                s = n - Math.ceil(m / 2);
                break;
            default:
                s = 0;
                break
            }
            return Math.max(s, 0)
        }
        function z({config: t, slidesCount: n}) {
            const {wrapAround: o, snapAlign: u, itemsToShow: m=1} = t;
            let s = 0;
            if (o || m > n)
                return s;
            switch (u) {
            case "start":
                s = 0;
                break;
            case "end":
                s = m - 1;
                break;
            case "center":
            case "center-odd":
                s = Math.floor((m - 1) / 2);
                break;
            case "center-even":
                s = Math.floor((m - 2) / 2);
                break;
            default:
                s = 0;
                break
            }
            return s
        }
        function w({val: t, max: n, min: o}) {
            return n < o ? t : Math.min(Math.max(t, o), n)
        }
        function E({config: t, currentSlide: n, slidesCount: o}) {
            const {snapAlign: u, wrapAround: m, itemsToShow: s=1} = t;
            let b = n;
            switch (u) {
            case "center":
            case "center-odd":
                b -= (s - 1) / 2;
                break;
            case "center-even":
                b -= (s - 2) / 2;
                break;
            case "end":
                b -= s - 1;
                break
            }
            return m ? b : w({
                val: b,
                max: o - s,
                min: 0
            })
        }
        function B(t) {
            return t ? t.reduce((n,o)=>{
                var u;
                return o.type === e.Fragment ? [...n, ...B(o.children)] : ((u = o.type) === null || u === void 0 ? void 0 : u.name) === "CarouselSlide" ? [...n, o] : n
            }
            , []) : []
        }
        function j({val: t, max: n, min: o=0}) {
            return t > n ? j({
                val: t - (n + 1),
                max: n,
                min: o
            }) : t < o ? j({
                val: t + (n + 1),
                max: n,
                min: o
            }) : t
        }
        function D(t, n) {
            let o;
            return n ? function(...u) {
                const m = this;
                o || (t.apply(m, u),
                o = !0,
                setTimeout(()=>o = !1, n))
            }
            : t
        }
        function f(t, n) {
            let o;
            return function(...u) {
                o && clearTimeout(o),
                o = setTimeout(()=>{
                    t(...u),
                    o = null
                }
                , n)
            }
        }
        function h(t="", n={}) {
            return Object.entries(n).reduce((o,[u,m])=>o.replace(`{${u}}`, String(m)), t)
        }
        var p = e.defineComponent({
            name: "ARIA",
            setup() {
                const t = e.inject("config", e.reactive(Object.assign({}, l)))
                  , n = e.inject("currentSlide", e.ref(0))
                  , o = e.inject("slidesCount", e.ref(0));
                return ()=>e.h("div", {
                    class: ["carousel__liveregion", "carousel__sr-only"],
                    "aria-live": "polite",
                    "aria-atomic": "true"
                }, h(t.i18n.itemXofY, {
                    currentSlide: n.value + 1,
                    slidesCount: o.value
                }))
            }
        }), x = e.defineComponent({
            name: "Carousel",
            props: k,
            setup(t, {slots: n, emit: o, expose: u}) {
                var m;
                const s = e.ref(null)
                  , b = e.ref([])
                  , g = e.ref(0)
                  , v = e.ref(0)
                  , d = e.reactive(Object.assign({}, l));
                let P = Object.assign({}, l), H;
                const y = e.ref((m = t.modelValue) !== null && m !== void 0 ? m : 0)
                  , W = e.ref(0)
                  , re = e.ref(0)
                  , U = e.ref(0)
                  , Z = e.ref(0);
                let Y, _e;
                e.provide("config", d),
                e.provide("slidesCount", v),
                e.provide("currentSlide", y),
                e.provide("maxSlide", U),
                e.provide("minSlide", Z),
                e.provide("slideWidth", g);
                function xe() {
                    H = Object.assign({}, t.breakpoints),
                    P = Object.assign(Object.assign(Object.assign({}, P), t), {
                        i18n: Object.assign(Object.assign({}, P.i18n), t.i18n),
                        breakpoints: void 0
                    }),
                    Le(P)
                }
                function le() {
                    if (!H || !Object.keys(H).length)
                        return;
                    const i = Object.keys(H).map(S=>Number(S)).sort((S,$)=>+$ - +S);
                    let T = Object.assign({}, P);
                    i.some(S=>{
                        const $ = window.matchMedia(`(min-width: ${S}px)`).matches;
                        return $ && (T = Object.assign(Object.assign({}, T), H[S])),
                        $
                    }
                    ),
                    Le(T)
                }
                function Le(i) {
                    Object.entries(i).forEach(([T,S])=>d[T] = S)
                }
                const Oe = f(()=>{
                    le(),
                    ee()
                }
                , 16);
                function ee() {
                    if (!s.value)
                        return;
                    const i = s.value.getBoundingClientRect();
                    g.value = i.width / d.itemsToShow
                }
                function Se() {
                    v.value <= 0 || (re.value = Math.ceil((v.value - 1) / 2),
                    U.value = _({
                        config: d,
                        slidesCount: v.value
                    }),
                    Z.value = z({
                        config: d,
                        slidesCount: v.value
                    }),
                    d.wrapAround || (y.value = w({
                        val: y.value,
                        max: U.value,
                        min: Z.value
                    })))
                }
                e.onMounted(()=>{
                    e.nextTick(()=>ee()),
                    setTimeout(()=>ee(), 1e3),
                    le(),
                    He(),
                    window.addEventListener("resize", Oe, {
                        passive: !0
                    }),
                    o("init")
                }
                ),
                e.onUnmounted(()=>{
                    _e && clearTimeout(_e),
                    Y && clearInterval(Y),
                    window.removeEventListener("resize", Oe, {
                        passive: !0
                    })
                }
                );
                let O = !1;
                const ce = {
                    x: 0,
                    y: 0
                }
                  , de = {
                    x: 0,
                    y: 0
                }
                  , G = e.reactive({
                    x: 0,
                    y: 0
                })
                  , ue = e.ref(!1)
                  , Ce = e.ref(!1)
                  , ot = ()=>{
                    ue.value = !0
                }
                  , at = ()=>{
                    ue.value = !1
                }
                ;
                function Ie(i) {
                    ["INPUT", "TEXTAREA", "SELECT"].includes(i.target.tagName) || (O = i.type === "touchstart",
                    O || i.preventDefault(),
                    !(!O && i.button !== 0 || q.value) && (ce.x = O ? i.touches[0].clientX : i.clientX,
                    ce.y = O ? i.touches[0].clientY : i.clientY,
                    document.addEventListener(O ? "touchmove" : "mousemove", Ee, !0),
                    document.addEventListener(O ? "touchend" : "mouseup", Fe, !0)))
                }
                const Ee = D(i=>{
                    Ce.value = !0,
                    de.x = O ? i.touches[0].clientX : i.clientX,
                    de.y = O ? i.touches[0].clientY : i.clientY;
                    const T = de.x - ce.x
                      , S = de.y - ce.y;
                    G.y = S,
                    G.x = T
                }
                , d.throttle);
                function Fe() {
                    const i = d.dir === "rtl" ? -1 : 1
                      , T = Math.sign(G.x) * .4
                      , S = Math.round(G.x / g.value + T) * i;
                    if (S && !O) {
                        const $ = Me=>{
                            Me.stopPropagation(),
                            window.removeEventListener("click", $, !0)
                        }
                        ;
                        window.addEventListener("click", $, !0)
                    }
                    X(y.value - S),
                    G.x = 0,
                    G.y = 0,
                    Ce.value = !1,
                    document.removeEventListener(O ? "touchmove" : "mousemove", Ee, !0),
                    document.removeEventListener(O ? "touchend" : "mouseup", Fe, !0)
                }
                function He() {
                    !d.autoplay || d.autoplay <= 0 || (Y = setInterval(()=>{
                        d.pauseAutoplayOnHover && ue.value || me()
                    }
                    , d.autoplay))
                }
                function $e() {
                    Y && (clearInterval(Y),
                    Y = null),
                    He()
                }
                const q = e.ref(!1);
                function X(i) {
                    const T = d.wrapAround ? i : w({
                        val: i,
                        max: U.value,
                        min: Z.value
                    });
                    y.value === T || q.value || (o("slide-start", {
                        slidingToIndex: i,
                        currentSlideIndex: y.value,
                        prevSlideIndex: W.value,
                        slidesCount: v.value
                    }),
                    q.value = !0,
                    W.value = y.value,
                    y.value = T,
                    _e = setTimeout(()=>{
                        if (d.wrapAround) {
                            const S = j({
                                val: T,
                                max: U.value,
                                min: 0
                            });
                            S !== y.value && (y.value = S,
                            o("loop", {
                                currentSlideIndex: y.value,
                                slidingToIndex: i
                            }))
                        }
                        o("update:modelValue", y.value),
                        o("slide-end", {
                            currentSlideIndex: y.value,
                            prevSlideIndex: W.value,
                            slidesCount: v.value
                        }),
                        q.value = !1,
                        $e()
                    }
                    , d.transition))
                }
                function me() {
                    X(y.value + d.itemsToScroll)
                }
                function Te() {
                    X(y.value - d.itemsToScroll)
                }
                const Ue = {
                    slideTo: X,
                    next: me,
                    prev: Te
                };
                e.provide("nav", Ue),
                e.provide("isSliding", q);
                const Ve = e.computed(()=>E({
                    config: d,
                    currentSlide: y.value,
                    slidesCount: v.value
                }));
                e.provide("slidesToScroll", Ve);
                const st = e.computed(()=>{
                    const i = d.dir === "rtl" ? -1 : 1
                      , T = Ve.value * g.value * i;
                    return {
                        transform: `translateX(${G.x - T}px)`,
                        transition: `${q.value ? d.transition : 0}ms`,
                        margin: d.wrapAround ? `0 -${v.value * g.value}px` : "",
                        width: "100%"
                    }
                }
                );
                function Ge() {
                    xe(),
                    le(),
                    Se(),
                    ee(),
                    $e()
                }
                Object.keys(k).forEach(i=>{
                    ["modelValue"].includes(i) || e.watch(()=>t[i], Ge)
                }
                ),
                e.watch(()=>t.modelValue, i=>{
                    i !== y.value && X(Number(i))
                }
                ),
                e.watch(v, Se),
                o("before-init"),
                xe();
                const qe = {
                    config: d,
                    slidesCount: v,
                    slideWidth: g,
                    next: me,
                    prev: Te,
                    slideTo: X,
                    currentSlide: y,
                    maxSlide: U,
                    minSlide: Z,
                    middleSlide: re
                };
                u({
                    updateBreakpointsConfigs: le,
                    updateSlidesData: Se,
                    updateSlideWidth: ee,
                    initDefaultConfigs: xe,
                    restartCarousel: Ge,
                    slideTo: X,
                    next: me,
                    prev: Te,
                    nav: Ue,
                    data: qe
                });
                const Ae = n.default || n.slides
                  , Be = n.addons
                  , Xe = e.reactive(qe);
                return ()=>{
                    const i = B(Ae == null ? void 0 : Ae(Xe))
                      , T = (Be == null ? void 0 : Be(Xe)) || [];
                    i.forEach((Ne,Re)=>Ne.props.index = Re);
                    let S = i;
                    if (d.wrapAround) {
                        const Ne = i.map((je,te)=>e.cloneVNode(je, {
                            index: -i.length + te,
                            isClone: !0,
                            key: `clone-before-${te}`
                        }))
                          , Re = i.map((je,te)=>e.cloneVNode(je, {
                            index: i.length + te,
                            isClone: !0,
                            key: `clone-after-${te}`
                        }));
                        S = [...Ne, ...i, ...Re]
                    }
                    b.value = i,
                    v.value = Math.max(i.length, 1);
                    const $ = e.h("ol", {
                        class: "carousel__track",
                        style: st.value,
                        onMousedownCapture: d.mouseDrag ? Ie : null,
                        onTouchstartPassiveCapture: d.touchDrag ? Ie : null
                    }, S)
                      , Me = e.h("div", {
                        class: "carousel__viewport"
                    }, $);
                    return e.h("section", {
                        ref: s,
                        class: {
                            carousel: !0,
                            "is-sliding": q.value,
                            "is-dragging": Ce.value,
                            "is-hover": ue.value,
                            "carousel--rtl": d.dir === "rtl"
                        },
                        dir: d.dir,
                        "aria-label": d.i18n.ariaGallery,
                        tabindex: "0",
                        onMouseenter: ot,
                        onMouseleave: at
                    }, [Me, T, e.h(p)])
                }
            }
        }), L;
        (function(t) {
            t.arrowUp = "arrowUp",
            t.arrowDown = "arrowDown",
            t.arrowRight = "arrowRight",
            t.arrowLeft = "arrowLeft"
        }
        )(L || (L = {}));
        const ve = {
            arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
            arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
            arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
            arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        };
        function ye(t) {
            return t in L
        }
        const J = t=>{
            const n = e.inject("config", e.reactive(Object.assign({}, l)))
              , o = String(t.name)
              , u = `icon${o.charAt(0).toUpperCase() + o.slice(1)}`;
            if (!o || typeof o != "string" || !ye(o))
                return;
            const m = ve[o]
              , s = e.h("path", {
                d: m
            })
              , b = n.i18n[u] || t.title || o
              , g = e.h("title", b);
            return e.h("svg", {
                class: "carousel__icon",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-label": b
            }, [g, s])
        }
        ;
        J.props = {
            name: String,
            title: String
        };
        const ie = (t,{slots: n, attrs: o})=>{
            const {next: u, prev: m} = n || {}
              , s = e.inject("config", e.reactive(Object.assign({}, l)))
              , b = e.inject("maxSlide", e.ref(1))
              , g = e.inject("minSlide", e.ref(1))
              , v = e.inject("currentSlide", e.ref(1))
              , d = e.inject("nav", {})
              , {dir: P, wrapAround: H, i18n: y} = s
              , W = P === "rtl"
              , re = e.h("button", {
                type: "button",
                class: ["carousel__prev", !H && v.value <= g.value && "carousel__prev--disabled", o == null ? void 0 : o.class],
                "aria-label": y.ariaPreviousSlide,
                onClick: d.prev
            }, (m == null ? void 0 : m()) || e.h(J, {
                name: W ? "arrowRight" : "arrowLeft"
            }))
              , U = e.h("button", {
                type: "button",
                class: ["carousel__next", !H && v.value >= b.value && "carousel__next--disabled", o == null ? void 0 : o.class],
                "aria-label": y.ariaNextSlide,
                onClick: d.next
            }, (u == null ? void 0 : u()) || e.h(J, {
                name: W ? "arrowLeft" : "arrowRight"
            }));
            return [re, U]
        }
          , we = ()=>{
            const t = e.inject("config", e.reactive(Object.assign({}, l)))
              , n = e.inject("maxSlide", e.ref(1))
              , o = e.inject("minSlide", e.ref(1))
              , u = e.inject("currentSlide", e.ref(1))
              , m = e.inject("nav", {})
              , s = g=>j({
                val: u.value,
                max: n.value,
                min: 0
            }) === g
              , b = [];
            for (let g = o.value; g < n.value + 1; g++) {
                const v = e.h("button", {
                    type: "button",
                    class: {
                        "carousel__pagination-button": !0,
                        "carousel__pagination-button--active": s(g)
                    },
                    "aria-label": h(t.i18n.ariaNavigateToSlide, {
                        slideNumber: g + 1
                    }),
                    onClick: ()=>m.slideTo(g)
                })
                  , d = e.h("li", {
                    class: "carousel__pagination-item",
                    key: g
                }, v);
                b.push(d)
            }
            return e.h("ol", {
                class: "carousel__pagination"
            }, b)
        }
        ;
        var ke = e.defineComponent({
            name: "CarouselSlide",
            props: {
                index: {
                    type: Number,
                    default: 1
                },
                isClone: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(t, {slots: n}) {
                const o = e.inject("config", e.reactive(Object.assign({}, l)))
                  , u = e.inject("currentSlide", e.ref(0))
                  , m = e.inject("slidesToScroll", e.ref(0))
                  , s = e.inject("isSliding", e.ref(!1))
                  , b = ()=>t.index === u.value
                  , g = ()=>t.index === u.value - 1
                  , v = ()=>t.index === u.value + 1
                  , d = ()=>{
                    const P = Math.floor(m.value)
                      , H = Math.ceil(m.value + o.itemsToShow - 1);
                    return t.index >= P && t.index <= H
                }
                ;
                return ()=>{
                    var P;
                    return e.h("li", {
                        style: {
                            width: `${100 / o.itemsToShow}%`
                        },
                        class: {
                            carousel__slide: !0,
                            "carousel__slide--clone": t.isClone,
                            "carousel__slide--visible": d(),
                            "carousel__slide--active": b(),
                            "carousel__slide--prev": g(),
                            "carousel__slide--next": v(),
                            "carousel__slide--sliding": s.value
                        },
                        "aria-hidden": !d()
                    }, (P = n.default) === null || P === void 0 ? void 0 : P.call(n))
                }
            }
        });
        r.Carousel = x,
        r.Icon = J,
        r.Navigation = ie,
        r.Pagination = we,
        r.Slide = ke,
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    })
}
)(ze, ze.exports);
var pe = ze.exports;
function tt() {
    return et("truex", ()=>"")
}
const os = {
    key: 0,
    id: "videoContainer",
    class: "fixed w-full inset-0 z-[5000] flex overflow-hidden justify-center items-center animated fadeIn faster bg-zinc-950/70"
}
  , as = a("div", {
    id: "scaleContainer",
    style: {
        transform: "scale(1)"
    },
    class: "z-[5000]"
}, [a("div", {
    id: "videoAd",
    class: "modal-content py-4 text-left px-6"
})], -1)
  , ss = [as]
  , ns = {
    __name: "TrueX",
    emits: ["callback"],
    setup(R, {emit: c}) {
        const r = Ze()
          , e = Wa()
          , l = tt()
          , {$isMobile: k} = Va()
          , _ = c
          , z = V(!1)
          , w = e.value.account;
        w || (z.value = !1),
        (w != null && w.error || w != null && w.permissions) && Ya(w == null ? void 0 : w.permissions).includes("premium") && (z.value = !0);
        function E(B, j) {
            const D = document.querySelector("#videoAd");
            if (!D)
                return;
            let f;
            k ? window.matchMedia("(orientation: landscape)").matches == !0 ? j <= 360 ? f = .6 : j <= 400 ? f = .65 : j <= 500 ? f = .7 : f = .8 : f = .95 : B >= 1032 ? f = 1 : B >= 768 ? f = .5 + (B - 600) / 960 : B >= 320 ? f = .6 + (B - 600) / 960 : f = .5,
            D.style.transform = `scale(${f})`
        }
        return We(()=>{
            if (!window.jwt)
                return _("callback", !0);
            E(window.innerWidth, window.innerHeight),
            window.addEventListener("resize", f=>E(f.target.innerWidth, f.target.innerHeight));
            const j = window.jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
              , D = JSON.parse(window.atob(j));
            try {
                truex.client({
                    user_id: D.id,
                    placement_hash: k() ? r.public.truexMobile : r.public.truex
                }, f=>{
                    f.requestAd(h=>{
                        if (!h) {
                            window.umami.track("truex", {
                                fingerprint: D.id,
                                no_bid: "No bid found"
                            }),
                            l.value = !1,
                            _("callback", !0),
                            console.log("[TrueX] No ads available");
                            return
                        }
                        document.querySelector("body").classList.add("overflow-hidden"),
                        document.querySelector("body").classList.add("hide-scrollbar"),
                        h.onStart(x=>{
                            window.umami.track("truex", {
                                fingerprint: D.id,
                                start: "Ad started"
                            }),
                            console.log(`[TrueX] ${x.id} - has started`)
                        }
                        ),
                        h.onFinish(x=>{
                            window.umami.track("truex", {
                                fingerprint: D.id,
                                finished: "Ad finished"
                            }),
                            l.value = !1,
                            document.querySelector("body").classList.remove("overflow-hidden"),
                            document.querySelector("body").classList.remove("hide-scrollbar"),
                            console.log(`[TrueX] ${x.id} - has finished`),
                            _("callback", !0)
                        }
                        ),
                        h.onCredit(x=>{
                            window.umami.track("truex", {
                                fingerprint: D.id,
                                credit: "Ad credit"
                            }),
                            console.log(`[TrueX] ${x.key} - give credit`)
                        }
                        ),
                        h.onClose(x=>{
                            console.log(`[TrueX] ${x.id} - closed`)
                        }
                        ),
                        h.onClickthrough(x=>{
                            console.log(`[TrueX] ${activeAd.id} - clickthrough ${x}`)
                        }
                        ),
                        f.trackTriggerPointImpression(h),
                        f.loadAdIntoContainer(h, document.querySelector("#videoAd")),
                        document.querySelectorAll("iframe").forEach(x=>{
                            x.allow == "geolocation; microphone; camera; autoplay" && k() && (console.log(k),
                            x.style.width = "100%")
                        }
                        )
                    }
                    )
                }
                )
            } catch (f) {
                window.umami.track("truex", {
                    ad_blocked: "Adblocked"
                }),
                console.log(f),
                l.value = !1,
                _("callback", !0);
                return
            }
        }
        ),
        Ye(()=>{
            window.removeEventListener("resize", B=>E(B.target.innerWidth))
        }
        ),
        (B,j)=>C(z) ? ne("", !0) : (N(),
        F("div", os, ss))
    }
}
  , is = ns
  , fe = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Agent Owl", "Master Elf", "Phantom King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Sandwich", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Baby Shark", "Megalodon", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Ice Slime", "Frozen Fossil", "Ice Crab", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Werewolf", "Ghost", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];
class rs {
    constructor(c, r, e) {
        I(this, "proxyUrl");
        I(this, "roomCode");
        I(this, "botName");
        I(this, "bsid");
        I(this, "bsidAllowed");
        I(this, "gameData");
        I(this, "idToken");
        I(this, "shardUrl");
        I(this, "ws");
        I(this, "lagswitchInterval");
        I(this, "lagswitch");
        this.proxyUrl = "https://blooket.schoolcheats.net/api/proxy",
        this.roomCode = c,
        this.botName = r,
        this.bsid = null,
        this.bsidAllowed = !1,
        this.gameData = null,
        this.idToken = null,
        this.shardUrl = null,
        this.ws = null,
        this.lagswitchInterval = null,
        this.lagswitch = e
    }
    generateBotName() {
        this.botName = this.botName + Math.floor(Math.random() * 2e3)
    }
    async generateBSID() {
        try {
            const c = await fetch(this.proxyUrl + "/play.blooket.com/play", {
                method: "GET"
            });
            console.log(c.headers.get("Set-Cookie"));
            const r = c.headers.get("x-set-cookie").split(";").filter(e=>e.includes("bsid"))[0].split("bsid=")[1];
            return this.bsid = r,
            r
        } catch {
            return null
        }
    }
    async allowBSID() {
        try {
            return fetch(this.proxyUrl + `/blooketfb/c/firebase/id?id=${this.roomCode}`, {
                method: "get",
                credentials: "include",
                headers: {
                    "x-cookie": "bsid=" + this.bsid
                }
            }),
            this.bsidAllowed = !0,
            !0
        } catch {
            return this.bsidAllowed = !1,
            !1
        }
    }
    async joinGame() {
        try {
            const r = await (await fetch(this.proxyUrl + "/blooketfb/c/firebase/join", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "x-cookie": "bsid=" + this.bsid
                },
                body: JSON.stringify({
                    id: this.roomCode,
                    name: this.botName
                })
            })).json();
            return this.gameData = r,
            this.shardUrl = r.fbShardURL.replace("https://blooket-", "").replace(".firebaseio.com/", ""),
            r
        } catch {
            return ""
        }
    }
    async verifyToken() {
        var c;
        try {
            const e = await (await fetch(this.proxyUrl + "/identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU", {
                method: "POST",
                body: JSON.stringify({
                    returnSecureToken: !0,
                    token: (c = this.gameData) == null ? void 0 : c.fbToken
                })
            })).json();
            return this.idToken = e.idToken,
            e
        } catch {
            return ""
        }
    }
    async lookUpToken() {
        try {
            return await fetch(this.proxyUrl + "/identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU", {
                method: "POST",
                body: JSON.stringify({
                    idToken: this.idToken
                })
            }).then(async r=>({
                status: r.status,
                data: await r.json()
            }))
        } catch {
            return ""
        }
    }
    async wsConnection() {
        const c = fe[Math.floor(Math.random() * fe.length)]
          , r = this.shardUrl;
        try {
            async function e() {
                return new Promise(async l=>{
                    const k = new WebSocket(`wss://blooket-${r}.firebaseio.com/.ws?v=5&p=1:741533559105:web:b8cbb10e6123f2913519c0`);
                    k.onopen = ()=>{
                        l(k)
                    }
                    ,
                    k.onmessage = _=>{
                        const z = JSON.parse(_.data);
                        _.data.includes("permission_denied") && k.close()
                    }
                }
                )
            }
            e().then(async l=>{
                this.ws = l,
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 1,
                        a: "s",
                        b: {
                            c: {
                                "sdk.js.9-13-0": 1
                            }
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 2,
                        a: "auth",
                        b: {
                            cred: this.idToken
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 3,
                        a: "q",
                        b: {
                            p: `/${this.roomCode}`,
                            h: ""
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 4,
                        a: "n",
                        b: {
                            p: `/${this.roomCode}`
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 5,
                        a: "p",
                        b: {
                            p: `/${this.roomCode}/c/${this.botName}`,
                            d: {
                                b: c
                            }
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 6,
                        a: "q",
                        b: {
                            p: `/${this.roomCode}/c`,
                            h: ""
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 7,
                        a: "q",
                        b: {
                            p: `/${this.roomCode}/stg`,
                            h: ""
                        }
                    }
                })),
                l.send(JSON.stringify({
                    t: "d",
                    d: {
                        r: 8,
                        a: "p",
                        b: {
                            p: `/${this.roomCode}/c/${this.botName}`,
                            d: {
                                b: c
                            }
                        }
                    }
                })),
                this.lagswitch == !0 && setInterval(()=>{
                    l.send(JSON.stringify({
                        t: "d",
                        d: {
                            r: 10,
                            a: "p",
                            b: {
                                p: `/${this.roomCode}/c/${this.botName}/b`,
                                d: fe[Math.floor(Math.random() * fe.length)]
                            }
                        }
                    }))
                }
                , 50)
            }
            )
        } catch {
            return !1
        }
    }
    async sendBot() {
        if (this.generateBotName(),
        await this.generateBSID(),
        !this.bsid)
            return console.log("Failed to fetch bsid");
        if (await this.allowBSID(),
        !this.bsidAllowed)
            return console.log("Failed to allow bsid");
        const c = await this.joinGame();
        if (!c)
            return console.log("Failed to fetch join game");
        if (c.success == !1)
            return console.log("Failed to fetch join game: " + c.data.msg);
        if (!c.fbShardURL)
            return console.log("Failed to fetch shard url");
        if (!c.fbToken)
            return console.log("Failed to fetch fb token");
        await this.verifyToken(),
        await this.lookUpToken() && this.wsConnection()
    }
}
const ls = [{
    type: "Global",
    displayName: "Global"
}, {
    type: "Classic",
    displayName: "Classic",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Classic_Logo_Resized.png"
}, {
    type: "BlookRush",
    displayName: "Blook Rush",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Blook_Rush_Logo_Resized.png"
}, {
    type: "Racing",
    displayName: "Racing",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212882/Media/logos/Racing_Logo_Resized.png"
}, {
    type: "Factory",
    displayName: "Factory",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Factory_Logo_Resized.png"
}, {
    type: "Cafe",
    displayName: "Cafe",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Cafe_Logo_Resized.png"
}, {
    type: "TowerDefense",
    displayName: "Tower Defense",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Tower_Defense_Logo_Resized.png"
}, {
    type: "BattleRoyale",
    displayName: "Battle Royale",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Battle_Royale_Logo_Resized.png"
}, {
    type: "Dinos",
    displayName: "Dinos",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Deceptive_Dinos_Logo_Resized.png"
}, {
    type: "MonsterBrawl",
    displayName: "Monster Brawl",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663366470/Media/logos/Monster_Brawl_270x156_1.png"
}, {
    type: "TowerDefense2",
    displayName: "Tower Defense 2",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1676079918/Media/logos/Tower_Defense_2_Logo_Resize.png"
}, {
    type: "FishingFrenzy",
    displayName: "Fishing Frenzy",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Fishing_Frenzy_Logo_Resized.png"
}, {
    type: "CryptoHack",
    displayName: "Crypto Hack",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212882/Media/logos/Crypto_Hack_Logo_Resized.png"
}, {
    type: "GoldQuest",
    displayName: "Gold Quest",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1663212881/Media/logos/Gold_Quest_Logo_Resized.png"
}, {
    type: "PiratesVoyage",
    displayName: "Pirates Voyage",
    image: "https://media.blooket.com/image/upload/f_auto,q_auto:best/v1695317816/Media/logos/PiratesVoyageLogoSmall.png"
}]
  , M = R=>(Qe("data-v-af256652"),
R = R(),
Ke(),
R)
  , cs = {
    class: "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
}
  , ds = {
    class: "text-center mx-auto"
}
  , us = M(()=>a("h1", {
    class: "mx-auto text-4xl font-extrabold dark:text-gradient tracking-tight sm:text-5xl font-sans"
}, [a("span", {
    class: "text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600"
}, "Blooket"), De(" Hacks ")], -1))
  , ms = M(()=>a("h2", {
    class: "mt-3 font-sans text-md sm:text-lg md:w-3/5 mx-auto"
}, " Introducing the Best Blooket hacks for answers and scripts! Need the answers to your Blooket? We've got you covered, simply input your game code or homework url below. Wanna spam some bots? Try out Blooket flooder! ", -1))
  , ps = {
    class: "grid sm:grid-cols-2 grid-cols-1 mt-10"
}
  , fs = {
    class: "max-w-lg text-center"
}
  , hs = M(()=>a("h2", {
    class: "text-2xl font-extrabold dark:text-gradient tracking-tight sm:text-3xl"
}, " Blooket Answers ", -1))
  , gs = {
    class: "text-left p-4"
}
  , bs = M(()=>a("span", null, "Blooket Code/Link", -1))
  , vs = {
    class: "mx-auto shadow-lg-invert flex focus-within:border-zinc-400 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 border p-2 rounded-lg"
}
  , ys = M(()=>a("span", null, "Get Answers", -1))
  , ws = [ys]
  , ks = {
    class: "max-w-lg text-center"
}
  , _s = M(()=>a("h2", {
    class: "text-2xl font-extrabold dark:text-gradient tracking-tight sm:text-3xl"
}, " Blooket Bots ", -1))
  , xs = {
    class: "mx-auto shadow p-4 mb-6 text-left"
}
  , Ss = M(()=>a("span", {
    class: "text-left w-full"
}, "Game Code", -1))
  , Cs = {
    class: "shadow-lg-invert focus-within:border-zinc-400 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 border p-2 rounded-lg mb-2"
}
  , Ts = {
    class: "grid grid-cols-2 gap-2"
}
  , As = M(()=>a("span", {
    class: "text-left w-full"
}, "Bot Name", -1))
  , Bs = {
    class: "shadow-lg-invert focus-within:border-zinc-400 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 border p-2 rounded-lg mb-2"
}
  , Ms = M(()=>a("span", null, "Bot Amount", -1))
  , Ns = {
    class: "shadow-lg-invert focus-within:border-zinc-400 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 border p-2 rounded-lg mb-2"
}
  , Rs = M(()=>a("div", {
    class: "pb-2 text-2xl font-bold"
}, "Additional Settings", -1))
  , js = {
    class: "flex gap-2"
}
  , Ps = M(()=>a("div", {
    class: "font-medium pb-0.5"
}, "Lag Switch", -1))
  , zs = {
    class: "mt-3"
}
  , Ds = M(()=>a("span", null, "Send Bots", -1))
  , Ls = [Ds]
  , Os = {
    key: 0,
    id: "answers",
    class: "dark:bg-zinc-800 dark:border-zinc-700 bg-zinc-100 border-zinc-200 rounded border shadow p-4 mb-6 animate-fade-down"
}
  , Is = {
    class: "mt-4"
}
  , Es = {
    class: "w-full p-3 rounded-lg bg-neutral-300 dark:bg-zinc-950 mb-2"
}
  , Fs = {
    class: "flex"
}
  , Hs = {
    class: "flex flex-col gap-1"
}
  , $s = {
    class: "text-xl"
}
  , Us = {
    class: "text-md font-light"
}
  , Vs = {
    class: "flex"
}
  , Gs = {
    class: "p-4 rounded-lg animate-fade-down animate-ease-in animate-delay-75 animate-duration-100"
}
  , qs = M(()=>a("h3", {
    class: "text-center dark:text-gradient text-2xl font-bold tracking-tight sm:text-4xl mb-2"
}, " Select a gamemode to view our scripts ", -1))
  , Xs = ["src"]
  , Js = M(()=>a("img", {
    class: "object-center object-cover rounded-lg",
    src: "https://cdn.discordapp.com/attachments/780710769548722176/1192279245909671977/OIG.jpg",
    alt: ""
}, null, -1))
  , Ws = M(()=>a("div", {
    class: "align-text-bottom absolute"
}, [a("div", {
    class: "text-md lg:text-4xl text-white font-extrabold p-2 lg:w-44",
    style: {
        "background-color": "rgba(11, 194, 207, 0.7)",
        "border-radius": "10px"
    }
}, " Global Scripts ")], -1))
  , Ys = [Js, Ws]
  , Ks = Je('<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4" data-v-af256652></section><hr class="mb-10 mt-2" data-v-af256652><div data-v-af256652><h3 class="dark:text-gradient text-2xl text-left font-bold tracking-tight sm:text-4xl" data-v-af256652> How do I execute one of these scripts? </h3><div class="mt-2 mb-4" data-v-af256652><h2 class="font-semibold text-2xl" data-v-af256652> Multiple ways to execute the console script </h2><section class="font-sans text-lg" data-v-af256652><p data-v-af256652> 1. Press the <code data-v-af256652>F12</code> button and switch to the console tab </p><p data-v-af256652>2. <code data-v-af256652>Ctrl + Shift + J</code></p><p data-v-af256652> 3. <code data-v-af256652>Right click</code> › <code data-v-af256652>Inspect</code> and switch to the console tab </p><p data-v-af256652> 4. Click the 3 dots on the top right corner › More Tools › Developer tools and switch to the console tab </p></section></div><div class="mt-2 mb-4" data-v-af256652><h2 class="font-semibold text-2xl" data-v-af256652>How to hack blooket?</h2><section class="font-sans text-lg" data-v-af256652><p data-v-af256652> Cheating on blooket couldnt be easier! You can use School Cheats <a href="https://schoolcheats.net/blooket" data-v-af256652>Blooket Hacks</a> blooket hacks to get all the answers to your Blooket with scripts like unlimited blooks and auto answer scripts. </p></section></div><div class="mt-2 mb-4" data-v-af256652><h2 class="font-semibold text-2xl" data-v-af256652>What are blooket bots?</h2><section class="font-sans text-lg" data-v-af256652><p data-v-af256652> Blooket bots are used to flood your teachers games with a bunch of players, including a feature to slow down your teachers computer. </p></section></div></div><hr class="mb-10 mt-10" data-v-af256652><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-af256652><div class="lg:grid lg:grid-cols-3 lg:gap-8 mb-12" data-v-af256652><div class="space-y-4" data-v-af256652><h2 class="text-3xl font-extrabold" data-v-af256652>School Cheats Blooket</h2><h3 class="prose dark:text-gray-300" data-v-af256652> Can&#39;t find the cheats you&#39;re looking for? Don&#39;t be a stranger! Come find us on <a class="text-blue-500" target="_blank" href="https://discord.gg/YMAc686Nzn" data-v-af256652>Discord</a>. </h3></div></div></div>', 5)
  , Qs = {
    __name: "blooket",
    setup(R) {
        Ka({
            script: [{
                src: "https://static.truex.com/js/client.js",
                tagPosition: "head",
                defer: !0
            }]
        }),
        qa();
        const c = Ze()
          , r = Xa()
          , e = tt()
          , l = V("")
          , k = V("")
          , _ = et("$cYXGqrJHR7")
          , z = V("")
          , w = V("")
          , E = V(!1);
        V(!1);
        function B() {
            r.add({
                type: "info",
                text: "Coming soon!"
            })
        }
        function j() {
            f(!0)
        }
        async function D() {
            r.add({
                type: "info",
                text: "Fetching answers.."
            });
            const h = await Qa(c.public.api + "/blooket/answers", {
                input: l.value
            });
            if (h.error && h.flag == "AUTH_FAILED_MISSING")
                return Ja("/login"),
                r.add({
                    type: "error",
                    text: h.message
                });
            if (h.error)
                return r.add({
                    type: "error",
                    text: h.message
                });
            r.add({
                type: "success",
                text: "Found answers!"
            }),
            h.live && (k.value = l.value),
            _.value = h,
            setTimeout(()=>{
                const p = document.querySelector("#answers");
                p && p.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            , 50)
        }
        async function f(h) {
            var p;
            if (window.jwt = await ((p = window.umami) == null ? void 0 : p.identify({})),
            !k.value)
                return r.add({
                    type: "error",
                    text: "Please input a game code first!"
                });
            if (!z.value)
                return r.add({
                    type: "error",
                    text: "Please input your bot name first!"
                });
            if (!w.value)
                return r.add({
                    type: "error",
                    text: "Please input how many bots first!"
                });
            if (!h) {
                e.value = !0;
                return
            }
            for (let x = 0; x < w.value; x++)
                new rs(k.value,z.value,E.value).sendBot();
            r.add({
                type: "success",
                text: "Sending bots!"
            })
        }
        return (h,p)=>{
            var u, m;
            const x = lt
              , L = ct
              , ve = dt
              , ye = rt
              , J = ut
              , ie = mt
              , we = pe.Slide
              , ke = pe.Navigation
              , t = pe.Pagination
              , n = pe.Carousel
              , o = is;
            return N(),
            F("main", cs, [A(ye, null, {
                default: Q(()=>[A(x, null, {
                    default: Q(()=>[De("Best Blooket hacks for answers and scripts")]),
                    _: 1
                }), A(L, {
                    name: "description",
                    content: "The best blooket hacks to unlock all blooks, get answers, auto answer, send flood bots, add tokens, and more for blooket!"
                }), A(ve, {
                    rel: "canonical",
                    href: "https://schoolcheats.net/blooket"
                }), A(L, {
                    name: "theme-color",
                    content: "#00aecd"
                }), A(L, {
                    name: "og:type",
                    content: "website"
                }), A(L, {
                    name: "og:image",
                    content: "/schoolcheats-s-in-blue.png"
                }), A(L, {
                    name: "og:image:alt",
                    content: "School Cheats Logo"
                }), A(L, {
                    name: "og:site_name",
                    content: "School Cheats"
                }), A(L, {
                    name: "keywords",
                    content: "blooket hacks, blooket hack, blooket hacks github, github blooket hack, how to hack blooket, blooket hacks for coins, github blooket hacks, schoolcheats, school cheats, hack, cheat, school, quizizz, kahoot, blooket, edmentum, educationperfect, deltamath, quizlet, edpuzzle, gimkit, edulastic, liveworksheets, learningapps, nearpod, wordwall"
                })]),
                _: 1
            }), a("div", ds, [us, ms, a("div", ps, [a("div", fs, [hs, a("div", gs, [bs, a("div", vs, [A(J, {
                class: "h-6 w-6",
                name: "material-symbols:search"
            }), se(a("input", {
                "onUpdate:modelValue": p[0] || (p[0] = s=>oe(l) ? l.value = s : null),
                class: "ml-2 dark:placeholder-neutral-400 bg-transparent outline-none w-full",
                type: "text",
                placeholder: "2607406 or https://play.blooket.com/play?hwId=65700de86a9c6a1c5b2ddf01"
            }, null, 512), [[ae, C(l)]])]), a("button", {
                "data-umami-event": "Blooket Answers",
                onClick: p[1] || (p[1] = s=>D()),
                class: "mt-2 bg-blue-600 hover:bg-blue-700 w-full inline-flex items-center font-medium relative text-sm px-4 py-2 rounded text-white shadow-sm flex-1 justify-center"
            }, ws)])]), a("div", ks, [_s, a("div", xs, [Ss, a("div", Cs, [se(a("input", {
                "onUpdate:modelValue": p[2] || (p[2] = s=>oe(k) ? k.value = s : null),
                class: "ml-2 w-full dark:placeholder-neutral-400 bg-transparent outline-none",
                type: "text",
                placeholder: "1135870"
            }, null, 512), [[ae, C(k)]])]), a("div", Ts, [a("div", null, [As, a("div", Bs, [se(a("input", {
                "onUpdate:modelValue": p[3] || (p[3] = s=>oe(z) ? z.value = s : null),
                class: "ml-2 w-full dark:placeholder-neutral-400 bg-transparent outline-none",
                type: "text",
                placeholder: "John Wick"
            }, null, 512), [[ae, C(z)]])])]), a("div", null, [Ms, a("div", Ns, [se(a("input", {
                "onUpdate:modelValue": p[4] || (p[4] = s=>oe(w) ? w.value = s : null),
                class: "ml-2 w-full dark:placeholder-neutral-400 bg-transparent outline-none",
                type: "number",
                placeholder: "10"
            }, null, 512), [[ae, C(w)]])])])]), a("div", null, [Rs, a("div", js, [a("button", {
                onClick: p[5] || (p[5] = s=>E.value = !C(E)),
                class: Pe([C(E) ? "bg-blue-500" : "bg-gray-600", "my-auto relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"]),
                id: "headlessui-switch-57",
                role: "switch",
                type: "button",
                tabindex: "0",
                "aria-checked": "false"
            }, [a("span", {
                "aria-hidden": "true",
                class: Pe([C(E) ? "translate-x-4 bg-white" : "translate-x-0 bg-gray-400", "pointer-events-none inline-block h-4 w-4 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"])
            }, null, 2)], 2), Ps])]), a("div", zs, [a("button", {
                "data-umami-event": "Blooket Send Bots",
                onClick: p[6] || (p[6] = s=>f()),
                class: "bg-blue-600 hover:bg-blue-700 w-full inline-flex items-center font-medium relative text-sm px-4 py-2 rounded text-white shadow-sm flex-1 justify-center"
            }, Ls)])])])])]), C(_) ? (N(),
            F("div", Os, [a("div", Is, [a("div", Es, [a("div", Fs, [C(_).set.coverImage ? (N(),
            ge(ie, {
                key: 0,
                class: "w-20 rounded-lg mr-2",
                src: (u = C(_).set.coverImage) == null ? void 0 : u.url,
                src_large: (m = C(_).set.coverImage) == null ? void 0 : m.url
            }, null, 8, ["src", "src_large"])) : ne("", !0), a("div", Hs, [a("p", $s, K(C(_).set.title), 1), a("p", Us, " Created by " + K(C(_).set.author) + " • " + K(C(_).set.numQuestions) + " Questions ", 1)])])]), (N(!0),
            F(he, null, be(C(_).set.questions, s=>{
                var b, g;
                return N(),
                F("div", {
                    class: "p-3 rounded-lg bg-neutral-200 dark:bg-zinc-900 mb-3",
                    key: s.number
                }, [a("div", Vs, [A(ie, {
                    class: "w-16 mr-2",
                    src: (b = s.image) == null ? void 0 : b.url,
                    src_large: (g = s.image) == null ? void 0 : g.url
                }, null, 8, ["src", "src_large"]), a("div", null, [a("b", null, K(s.question), 1), (N(!0),
                F(he, null, be(s.correctAnswers, v=>(N(),
                F("div", {
                    class: "",
                    key: v
                }, " ✅ " + K(v), 1))), 128))])])])
            }
            ), 128))])])) : ne("", !0), a("div", Gs, [qs, A(n, {
                "items-to-show": 4.5,
                "items-to-scroll": 4,
                autoplay: 1e4,
                transition: 600,
                wrapAround: !0,
                pauseAutoplayOnHover: !0
            }, {
                addons: Q(()=>[A(ke), A(t)]),
                default: Q(()=>[(N(!0),
                F(he, null, be("blooketGamemodes"in h ? h.blooketGamemodes : C(ls), s=>(N(),
                ge(we, {
                    key: s.displayName
                }, {
                    default: Q(()=>[s.displayName != "Global" ? (N(),
                    F("button", {
                        key: 0,
                        onClick: p[7] || (p[7] = b=>B()),
                        class: "duration-300 hover:scale-110 cursor-pointer w-full shadow-3xl flex flex-col justify-center items-center",
                        style: {
                            width: "300px",
                            height: "250px"
                        }
                    }, [a("img", {
                        class: "object-center object-cover rounded-lg",
                        src: s.image
                    }, null, 8, Xs)])) : (N(),
                    F("button", {
                        key: 1,
                        onClick: p[8] || (p[8] = b=>B()),
                        class: "duration-300 hover:scale-110 cursor-pointer w-full shadow-3xl flex flex-col justify-end items-center",
                        style: {
                            width: "250px"
                        }
                    }, Ys))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            })]), Ks, C(e) ? (N(),
            ge(o, {
                key: 1,
                onCallback: p[9] || (p[9] = s=>j())
            })) : ne("", !0)])
        }
    }
}
  , mn = Ga(Qs, [["__scopeId", "data-v-af256652"]]);
export {mn as default};

