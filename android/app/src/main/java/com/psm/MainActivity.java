package com.psm;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.remobile.splashscreen.*;
import com.magus.fblogin.FacebookLoginPackage;
import co.apptailor.googlesignin.RNGoogleSigninModule;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import android.content.Intent;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    private ReactNativePushNotificationPackage mReactNativePushNotificationPackage;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "psm";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        mReactNativePushNotificationPackage = new ReactNativePushNotificationPackage(this);
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RCTSplashScreenPackage(this),
            new FacebookLoginPackage(),
            new RNGoogleSigninPackage(this),
            mReactNativePushNotificationPackage
        );
    }

    @Override
        public void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        if (requestCode == RNGoogleSigninModule.RC_SIGN_IN) {
            RNGoogleSigninModule.onActivityResult(data);
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent (Intent intent) {
      super.onNewIntent(intent);

      mReactNativePushNotificationPackage.newIntent(intent);
    }
}
