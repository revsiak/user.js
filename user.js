// General Browser Preferences
user_pref("app.update.enabled", false);
user_pref("extensions.update.enabled", false);

// Telemetry Preferences
user_pref("toolkit.telemetry.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("breakpad.reportURL", "");



// Multiple-Process Preferences
user_pref("browser.tabs.remote.autostart", true);
user_pref("dom.ipc.processCount", 1);
user_pref("dom.ipc.processPrelaunch.enabled", true);
user_pref("security.sandbox.content.level", 3);
//user_pref("dom.noopener.newprocess.enabled", false);
//user_pref("dom.largeAllocationHeader.enabled", false);
//user_pref("dom.ipc.processCount.webLargeAllocation", 0);
user_pref("browser.tabs.remote.separateFileUriProcess", true);
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
user_pref("dom.ipc.processCount.file", 1);
//user_pref("extensions.webextensions.remote", false);
//user_pref("dom.ipc.processCount.extension", 1);
user_pref("layers.gpu-process.enabled", true);



// Hardware Acceleration Preferences
user_pref("layers.acceleration.disabled", false);
user_pref("gfx.direct2d.disabled", false);

// Asynchronous Pan & Zoom Preferences
user_pref("layers.async-pan-zoom.enabled", true);
user_pref("apz.drag.enabled", true);
user_pref("apz.keyboard.enabled", true);
//user_pref("apz.popups.enabled", true);
//user_pref("apz.disable_for_scrolled_linked_effects", false);
user_pref("apz.allow_checkerboarding", false);

// Off-Main-Thread Rendering Preferences
user_pref("layers.offmainthreadcomposition.enabled", true);
user_pref("layers.offmainthreadcomposition.async-animations", true);
user_pref("layers.omtp.enabled", true);

// Parallel Rendering Preferences
user_pref("layout.css.servo.enabled", true);
user_pref("layout.css.servo.chrome.enabled", true);

// GPU Browser Rendering Preferences
//user_pref("gfx.webrender.enabled", true);
//user_pref("gfx.webrender.layers-free", true);
//user_pref("gfx.webrender.blob-images", true);
//user_pref("gfx.webredest.enabled", true);
user_pref("layers.mlgpu.enabled", true);
user_pref("layers.mlgpu.enable-on-windows7", true);
//user_pref("layout.display-list.dump", true);
//user_pref("layout.display-list.dump-content", true);
//user_pref("layout.display-list.retain", true);
//user_pref("layout.display-list.rebuild-frame-limit", 700);
//user_pref("layout.display-list.retain.chrome", true);

// Speculative Rendering Preferences
user_pref("browser.tabs.remote.warmup.enabled", true);
user_pref("browser.tabs.remote.warmup.maxTabs", 2);
user_pref("browser.tabs.remote.warmup.unloadDelayMs", 2000);

// Font Rendering Preferences
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 6);



// DOM Scheduler Preferences
//user_pref("dom.ipc.scheduler", true);
//user_pref("dom.ipc.scheduler.threadCount", 2);
//user_pref("dom.ipc.scheduler.preemption", false);
//user_pref("dom.ipc.scheduler.useMultipleQueues", true);

// Script Run-Time Preferences
user_pref("dom.max_script_run_time", 8);
user_pref("dom.max_ext_content_script_run_time", 4);
user_pref("dom.max_chrome_script_run_time", 8);

// Background Tab Throttling Preferences
user_pref("dom.timeout.enable_budget_timer_throttling", true);
user_pref("dom.timeout.throttling_delay", 80000);
user_pref("dom.timeout.budget_throttling_max_delay", 20000);
user_pref("dom.timeout.background_throttling_max_budget", 40);
user_pref("dom.timeout.background_budget_regeneration_rate", 100);
user_pref("dom.timeout.foreground_throttling_max_budget", -1);
user_pref("dom.timeout.foreground_budget_regeneration_rate", 1);

// Script Timer Throttling Preferences
user_pref("dom.min_timeout_value", 20);
user_pref("dom.min_background_timeout_value", 1000);



// Cookie Preferences
user_pref("network.cookie.cookieBehavior", 1);

// TCP/IP Preferences
//user_pref("network.tcp.keepalive.enabled", true);
//user_pref("network.tcp.tcp_fastopen_enable", true);

// Network Preferences
user_pref("network.http.max-connections", 280);
user_pref("network.http.max-connections-per-server", 20);
user_pref("network.http.max-persistent-connections-per-server", 8);

// Speculative Network Preferences
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("network.predictor.enabled", true);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.preload", true);
user_pref("network.http.speculative-parallel-limit", 2);
user_pref("browser.urlbar.speculativeconnect.enabled", false);
user_pref("network.prefetch-next", false);

// Network Priority Preferences
user_pref("network.http.throttle.enable", true);
user_pref("network.http.throttle.suspend-for", 800);
user_pref("network.http.throttle.resume-for", 100);
user_pref("network.http.throttle.resume-background-in", 1000);
user_pref("network.http.throttle.time-window", 2000);

// 2
user_pref("network.http.throttle.hold-time-ms", 800);
user_pref("network.http.throttle.max-time-ms", 600);
user_pref("network.http.throttle.read-interval-ms", 600);
user_pref("network.http.throttle.read-limit-bytes", 8000);

user_pref("network.http.active_tab_priority", true);
user_pref("network.http.focused_window_transaction_ratio", 0.8);
user_pref("network.http.on_click_priority", true);

user_pref("network.http.rendering-critical-requests-prioritization", true);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 2);

user_pref("image.layout_network_priority", true);

// Network Tailing Preferences
//user_pref("network.http.tailing.enabled", true);
//user_pref("network.http.tailing.delay-quantum", 800);
//user_pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100);
//user_pref("network.http.tailing.delay-max", 8000);

// Network Pace Preferences
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.http.pacing.requests.burst", 8);
user_pref("network.http.pacing.requests.hz", 80);
user_pref("network.http.pacing.requests.min-parallelism", 6);

// Race-Cache-With-Network Preferences
user_pref("network.http.rcwn.enabled", true);
user_pref("network.http.rcwn.small_resource_size_kb", 256);
user_pref("network.http.rcwn.min_wait_before_racing_ms", 0);
user_pref("network.http.rcwn.max_wait_before_racing_ms", 400);
user_pref("network.http.rcwn.cache_queue_normal_threshold", 8);
user_pref("network.http.rcwn.cache_queue_priority_threshold", 2);



// Tab History Preferences
user_pref("browser.sessionhistory.max_total_viewers", 2);
user_pref("browser.sessionhistory.max_entries", 200);

// Session Preferences
user_pref("browser.sessionstore.enabled", true);
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.sessionstore.interval.idle", 120000);
user_pref("browser.sessionstore.idleDelay", 480000);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.max_serialize_back", 8);
user_pref("browser.sessionstore.max_serialize_forward", -1);
user_pref("browser.sessionstore.max_tabs_undo", 20);
user_pref("browser.sessionstore.max_windows_undo", 1);



// Memory Cache Preferences
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.max_entry_size", 6000);
user_pref("browser.cache.memory.capacity", 80000);

// Disk Cache Preferences
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.cache_ssl", true);
user_pref("browser.cache.disk.max_entry_size", 8000);
user_pref("browser.cache.disk.capacity", 2000000);



// Start Page Preferences
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:blank");

// Tab Page Preferences
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Location Bar Preferences
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.formatting.enabled", true);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.clickSelectsAll", false);
user_pref("browser.urlbar.doubleClickSelectsAll", true);

// Tab Bar Preferences
user_pref("browser.tabs.onTop", true);
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.tabs.animate", false);
user_pref("browser.tabs.loadInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.insertRelatedAfterCurrent", false);
user_pref("browser.tabs.selectOwnerOnClose", false);
user_pref("browser.tabs.warnOnOpen", true);
user_pref("browser.tabs.maxOpenBeforeWarn", 8);
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.warnOnCloseOtherTabs", true);
user_pref("browser.tabs.closeWindowWithLastTab", false);



// Translation Preferences
//user_pref("browser.translation.detectLanguage", true);
//user_pref("browser.translation.ui.show", true);
//user_pref("browser.translation.engine", "bing");
//user_pref("browser.translation.bing.clientId", );
//user_pref("browser.translation.bing.apiKeyOverride", );

// Link Preferences
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 2);
user_pref("browser.link.open_newwindow.override.external", -1);



// Popup Blocker Preferences
user_pref("dom.popup_maximum", 1);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_open_click_delay", 2000);
user_pref("dom.popup_allowed_events", "click submit");
user_pref("privacy.popups.disable_from_plugins", 2);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

// Event Preferences
user_pref("dom.event.contextmenu.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("browser.tabs.dontfocusfordialogs", true);
user_pref("dom.disable_beforeunload", false);
user_pref("dom.require_user_interaction_for_beforeunload", true);
user_pref("accessibility.blockautorefresh", true);
user_pref("browser.meta_refresh_when_inactive.disabled", true);
user_pref("accessibility.blockjsredirection", false);
user_pref("network.http.redirection-limit", 8);
user_pref("browser.history.allowPushState", false);
user_pref("browser.history.allowReplaceState", false);
user_pref("browser.history.allowPullState", false);



// Web API Preferences
user_pref("geo.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("network.websocket.enabled", false);
user_pref("dom.workers.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.webnotification.enabled", false);
user_pref("dom.webnotification.requireinteraction.enabled", true);
user_pref("dom.battery.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("webgl.disabled", false);



user_pref("dom.disable_window_move_resize", false);
user_pref("dom.disable_window_flip", true);
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.location", false);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.resizable", false);



// Selection Preferences
user_pref("browser.triple_click_selects_paragraph", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("layout.word_select.stop_at_punctuation", true);

// Form Preferences
user_pref("browser.formfill.enable", false);
user_pref("layout.spellcheckDefault", 2);

// Login Preferences
user_pref("signon.rememberSignons", true);
user_pref("signon.storeWhenAutocompleteOff", true);
user_pref("signon.formlessCapture.enabled", true);
user_pref("signon.autofillForms", false);
user_pref("signon.insecure_password.ui.enabled", false);
user_pref("security.insecure_field_warning.contextual.enabled", false);
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);



// Tracking Protection
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.trackingprotection.enabled", false);



// Browser Feature Preferences
user_pref("pdfjs.disabled", true);
user_pref("reader.parse-on-load.enabled", false);
user_pref("experiments.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", false);



// Scrollbar Preferences
user_pref("general.autoScroll", false);
user_pref("general.smoothScroll", false);
user_pref("ui.scrollToClick", 1);
user_pref("slider.snapMultiplier", 0);



// Plugin Preferences
user_pref("dom.ipc.plugins.asyncInit.enabled", true);
user_pref("dom.ipc.plugins.asyncdrawing.enabled", true);
user_pref("plugins.click_to_play", true);

// Image Preferences
user_pref("image.mem.discardable", true);
user_pref("image.mem.animated.discardable", true);
user_pref("image.mem.allow_locking_in_content_processes", true);
user_pref("image.mem.shared", true);
user_pref("image.multithreaded_decoding.limit", -1);

// Video & Audio Preferences
user_pref("html5.offmainthread", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.gpu-process-decoder", true);
user_pref("media.suspend-bkgnd-video.enabled", true);
//user_pref("media.suspend_bkgnd-video.delay-ms", 8000);
//user_pref("media.dormant-on-pause-timeout-ms", 2000);
user_pref("media.autoplay.enabled", false);
user_pref("media.autoplay.enabled.user-gestures-needed", true);
user_pref("media.block-play-until-visible", false);
user_pref("media.block-autoplay-until-in-foreground", false);



user_pref("dom.animations.offscreen-throttling", true);
user_pref("security.data_uri.unique_opaque_origin", true);


// Browser Preferences
user_pref("ui.caretWidth", 2);
user_pref("nglayout.enable_drag_images", false);
user_pref("browser.chrome.toolbar_tips", false);

user_pref("browser.places.useAsyncTransactions", true);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.previews.enable", false);