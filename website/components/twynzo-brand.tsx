export default function TwynzoBrand({locale}:{locale:string}) {
 return <a className="wordmark twynzo-brand" href={`/${locale}`} aria-label="Twynzo"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M3 5h24v5H18v15h-6V10H3z" fill="currentColor"/><path d="M22 18h4v4h-4zM4 18h4v4H4z" fill="currentColor" opacity=".5"/></svg><span>Twynzo</span></a>;
}
