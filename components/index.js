export { default as Card } from '../../components/card.vue'
export { default as Chart } from '../../components/chart.vue'
export { default as Graph } from '../../components/graph.vue'
export { default as Header } from '../../components/header.vue'

export const LazyCard = import('../../components/card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyChart = import('../../components/chart.vue' /* webpackChunkName: "components/chart" */).then(c => c.default || c)
export const LazyGraph = import('../../components/graph.vue' /* webpackChunkName: "components/graph" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
