<?php

namespace MyGSV\App\Providers;

use Illuminate\Support\Facades\Request;
use Themosis\Core\Support\Providers\RouteServiceProvider as ServiceProvider;
use Themosis\Support\Facades\Asset;
use Themosis\Support\Facades\User;

class AssetServiceProvider extends ServiceProvider
{
    protected $plugin,
        $plugin_version,
        $dist_directory, $asset_manifest;

    public function register()
    {
        if (request()->is('my-gsv') || request()->is('my-gsv/*')) {
            $this->plugin = $this->app->make('wp.plugin.my-gsv');
            $this->plugin_version = $this->plugin->getHeader('version');
            $this->dist_directory = $this->plugin->getUrl() . '/react-app/build';
            $this->asset_manifest = $this->plugin->getPath() . '/react-app/build/asset-manifest.json';
            $this->enqueueScripts();
            $this->enqueueStyles();
        }
    }

    public function enqueueScripts()
    {
        Asset::add(
            $this->plugin->getHeader('name') . '_dev',
            $this->dist_directory . asset_manifest('main.js', $this->asset_manifest),
            [],
            $this->plugin_version
        )->to('front');
    }

    public function enqueueStyles()
    {
        Asset::add(
            $this->plugin->getHeader('name') . '_dev',
            $this->dist_directory . '/app.css',
            [],
            $this->plugin_version,
            'all'
        )->to('front');
    }
}
