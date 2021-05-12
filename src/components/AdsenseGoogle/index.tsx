import { useEffect } from "react";
import PropTypes from 'prop-types';

const googleAdId = 'ca-pub-4792845809342776';

declare global {
  interface Window {

  }
}

export function AdsenseGoogle({ timeout, classNames, slot, ...rest }) {
  let googleInit = null;

  useEffect(() => {
    googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, timeout);
  }, []);

  useEffect(() => {
    if (googleInit) clearTimeout(googleInit);
  }, [googleInit]);

  return (
    <div className={classNames}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={googleAdId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
    </div>
  );
}

AdsenseGoogle.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
};

AdsenseGoogle.defaultProps = {
  classNames: '',
  timeout: 200,
};

/**
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VerticalAd -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4792845809342776"
     data-ad-slot="5630999736"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
 */