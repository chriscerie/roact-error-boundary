"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[254],{54938:r=>{r.exports=JSON.parse('{"functions":[],"properties":[],"types":[{"name":"ErrorBoundarySharedProps","desc":"","fields":[{"name":"onError","lua_type":"(error: Error, info: { componentStack: string }) -> ()?","desc":""},{"name":"onReset","lua_type":"(details: { reason: \\"imperative-api\\", args: { any } } | { reason: \\"keys\\", prev: { any }?, next: { any }? }) -> ()?","desc":""},{"name":"resetKeys","lua_type":"{ any }?","desc":""}],"source":{"line":45,"path":"src/types.lua"}},{"name":"ErrorBoundaryPropsWithComponent","desc":"One of 3 types of fallback that can be provided to an error boundary.\\n\\nSee [ErrorIn1SecondFallbackComponent](https://github.com/chriscerie/react-error-boundary/blob/main/stories/ErrorIn1SecondFallbackComponent.story.lua) for a full example.\\n```lua\\n\\treturn e(ReactErrorBoundary.ErrorBoundary, {\\n\\t\\tFallbackComponent = Fallback,\\n\\t}, {\\n\\t\\tComponentThatErrors = e(ComponentThatErrors),\\n\\t})\\n```","fields":[{"name":"fallback","lua_type":"never?","desc":""},{"name":"FallbackComponent","lua_type":"React.ComponentType<FallbackProps>","desc":""},{"name":"fallbackRender","lua_type":"never?","desc":""}],"source":{"line":71,"path":"src/types.lua"}},{"name":"ErrorBoundaryPropsWithRender","desc":"One of 3 types of fallback that can be provided to an error boundary.\\n\\n[Render prop](https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering) function that returns the fallback UI.\\nThis is helpful if you want to handle errors differently based on the error.\\n\\nSee [ErrorIn1SecondFallbackComponent](https://github.com/chriscerie/react-error-boundary/blob/main/stories/ErrorIn1SecondFallbackRender.story.lua) for a full example.\\n\\n:::caution\\nRender prop functions are normal functions and are not React components. Attempting to use hooks in them will error!\\n:::\\n\\n```lua\\n\\treturn e(ReactErrorBoundary.ErrorBoundary, {\\n\\t\\tfallbackRender = function(props: ReactErrorBoundary.FallbackProps)\\n\\t\\t\\treturn e(Fallback)\\n\\t\\tend,\\n\\t}, {\\n\\t\\tComponentThatErrors = e(ComponentThatErrors),\\n\\t})\\n```","fields":[{"name":"fallback","lua_type":"never?","desc":""},{"name":"FallbackComponent","lua_type":"never?","desc":""},{"name":"fallbackRender","lua_type":"FallbackRender","desc":""}],"source":{"line":105,"path":"src/types.lua"}},{"name":"ErrorBoundaryPropsWithFallback","desc":"One of 3 types of fallback that can be provided to an error boundary.\\n\\nSee [ErrorIn1SecondFallback](https://github.com/chriscerie/react-error-boundary/blob/main/stories/ErrorIn1SecondFallback.story.lua) for a full example.\\n\\n:::caution\\nThis creates the fallback element even when it\'s not needed.\\n:::\\n\\n```lua\\n\\treturn e(ReactErrorBoundary.ErrorBoundary, {\\n\\t\\tfallback = e(Fallback),\\n\\t}, {\\n\\t\\tComponentThatErrors = e(ComponentThatErrors),\\n\\t})\\n```","fields":[{"name":"fallback","lua_type":"React.ReactNode","desc":""},{"name":"FallbackComponent","lua_type":"never?","desc":""},{"name":"fallbackRender","lua_type":"never?","desc":""}],"source":{"line":134,"path":"src/types.lua"}},{"name":"ErrorBoundaryProps","desc":"","lua_type":"ErrorBoundarySharedProps & (ErrorBoundaryPropsWithComponent | ErrorBoundaryPropsWithRender | ErrorBoundaryPropsWithFallback)","source":{"line":144,"path":"src/types.lua"}}],"name":"ErrorBoundary","desc":"```lua\\nReact.React_Component<PropsWithRef<PropsWithChildren<ErrorBoundaryProps>>, ErrorBoundaryState>\\n```\\n\\nThis is a React component. Wrap an `ErrorBoundary` around other React components to \\"catch\\" errors\\nand render a fallback UI. The component supports several ways to render a fallback (shown below).\\n\\nFirst, create a fallback component.\\n```lua\\n\\tlocal e = React.createElement\\n\\tlocal Fallback: React.FC<ReactErrorBoundary.FallbackProps> = function(_props)\\n\\t\\treturn e(\\"TextLabel\\", {\\n\\t\\t\\tAnchorPoint = Vector2.new(0.5, 0.5),\\n\\t\\t\\tSize = UDim2.fromScale(0.5, 0.5),\\n\\t\\t\\tPosition = UDim2.fromScale(0.5, 0.5),\\n\\t\\t\\tText = \\"An error was encountered!.\\",\\n\\t\\t})\\n\\tend\\n```\\n\\nNext, in your other components, wrap in an `ErrorBoundary` where needed. When an error is encountered somewhere in your app,\\nthe nearest `ErrorBoundary` will catch and handle it. You don\'t need to wrap every component in an `ErrorBoundary`. Consider\\nthe [granularity of error boundaries](https://aweary.dev/fault-tolerance-react/) and where it makes sense to display an error\\nmessage or revert states.\\n\\n`ErrorBoundary` requires a fallback component to be passed in as props. There are 3 ways to pass fallback components. See their\\ntypes documentation for usage:\\n* [ErrorBoundaryPropsWithComponent](/api/ErrorBoundary#ErrorBoundaryPropsWithComponent)\\n* [ErrorBoundaryPropsWithRender](/api/ErrorBoundary#ErrorBoundaryPropsWithRender)\\n* [ErrorBoundaryPropsWithFallback](/api/ErrorBoundary#ErrorBoundaryPropsWithFallback)\\n\\n#### onError\\nWhen passed, `onError` gets called when an error is caught. This is useful for logging errors.\\n\\n```lua\\n\\treturn e(ReactErrorBoundary.ErrorBoundary, {\\n\\t\\tFallbackComponent = Fallback,\\n\\t\\tonError = function(error: LuauPolyfill.Error, info: { componentStack: string })\\n\\t\\t\\twarn(\\"Caught error:\\", error, info)\\n\\t\\tend,\\n\\t}, {\\n\\t\\tComponentThatErrors = e(ComponentThatErrors),\\n\\t})\\n```\\n\\n### onReset\\nWhen passed, `onReset` gets called when the error boundary is reset by a call to `resetErrorBoundary` or when the `resetKeys` change.\\nThis is useful for reverting state.\\n\\nSee [ResetCount](https://github.com/chriscerie/react-error-boundary/blob/main/stories/ResetCount.story.lua) for a full example.\\n\\n```lua\\n\\treturn e(ReactErrorBoundary.ErrorBoundary, {\\n\\t\\tFallbackComponent = Fallback,\\n\\t\\tonReset = function(\\n\\t\\t\\tdetails: { reason: \\"imperative-api\\",\\n\\t\\t\\targs: { any } } | { reason: \\"keys\\", prev: { any }?, next: { any }? }\\n\\t\\t)\\n\\t\\t\\twarn(\\"Error boundary was reset:\\", details)\\n\\t\\tend,\\n\\t}, {\\n\\t\\tComponentThatErrors = e(ComponentThatErrors),\\n\\t})\\n```","source":{"line":110,"path":"src/ErrorBoundary.lua"}}')}}]);