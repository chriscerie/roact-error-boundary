local React = require(script.Parent.Parent.React)
local LuauPolyfill = require(script.Parent.Parent.LuauPolyfill)

-- DEVIATION: For some reason, fallbackRender in withErrorBoundary could not resolve to React.ReactNode return
-- without type casting, so use `any` for now to avoid user needing to type cast
type FallbackRender = (props: FallbackProps) -> any

--[=[
	A `LuauPolyFill.Error` object to represent errors produced.
	```lua
	{
		message: string,
		name: string,
		stack: string,
	}
	```
	@class Error
]=]

--[=[
	Props for fallback components. Fallback components should be typed like:
	```lua
		local Fallback: React.FC<ReactErrorBoundary.FallbackProps> = function(props)
			-- ...
		end
	```
	@interface FallbackProps
	@within ReactErrorBoundary
	.error Error
	.resetErrorBoundary (...any) -> () -- Resets the error boundary and calls `onReset` if provided. This is useful for reverting state or retrying the render.
]=]
export type FallbackProps = {
	error: LuauPolyfill.Error,
	resetErrorBoundary: (...any) -> (),
}

type ErrorBoundarySharedProps = {
	onError: (error: LuauPolyfill.Error, info: { componentStack: string }) -> ()?,
	onReset: (
		details: { reason: "imperative-api", args: { any } } | { reason: "keys", prev: { any }?, next: { any }? }
	) -> ()?,
	resetKeys: { any }?,
}

export type ErrorBoundaryPropsWithComponent = ErrorBoundarySharedProps & {
	fallback: never?,
	FallbackComponent: React.ComponentType<FallbackProps>,
	fallbackRender: never?,
}

export type ErrorBoundaryPropsWithRender = ErrorBoundarySharedProps & {
	fallback: never?,
	FallbackComponent: never?,
	fallbackRender: FallbackRender,
}

export type ErrorBoundaryPropsWithFallback = ErrorBoundarySharedProps & {
	fallback: React.ReactElement<any, any>,
	FallbackComponent: never?,
	fallbackRender: never?,
}

export type ErrorBoundaryProps =
	ErrorBoundaryPropsWithFallback
	| ErrorBoundaryPropsWithComponent
	| ErrorBoundaryPropsWithRender

return {}
