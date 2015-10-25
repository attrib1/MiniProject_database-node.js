package com.example.pena.test_feed_projectnew;

import android.content.Context;
import android.support.v4.widget.SwipeRefreshLayout;
import android.util.AttributeSet;
import android.util.Log;

/**
 * Created by admin on 25/10/58.
 */
public class MySwipeRefreshLayout extends SwipeRefreshLayout {

    private static final String TAG = "";

    public MySwipeRefreshLayout(Context context) {
        super(context);
        Log.e(TAG, "MySwipeRefreshLayout: ");
        init();
    }

    public MySwipeRefreshLayout(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    private void init() {
        setColorSchemeResources(R.color.red, R.color.blue, R.color.green);
        setProgressBackgroundColor(R.color.purple);
        setSize(LARGE);
    }

    // สั่งให้เริ่มงาน
    public void startRefresh() {
         setRefreshing(true);
    }

    // สั่งให้หยุดทำงาน
    public void refreshComplete() {
         setRefreshing(false);
    }
}

