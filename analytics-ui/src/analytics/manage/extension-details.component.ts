/*
 * Copyright (c) 2022 Software AG, Darmstadt, Germany and/or Software AG USA Inc., Reston, VA, USA,
 * and/or its subsidiaries and/or its affiliates and/or their licensors.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @authors Christof Strack
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { gettext } from "@c8y/ngx-components";
import { AnalyticsService } from "../../shared/analytics.service";
import { CEP_Extension } from "../../shared/analytics.model";

@Component({
  selector: "analytics-extension-details",
  templateUrl: "./extension-details.component.html",
})
export class AnalyticsExtensionDetailsComponent implements OnInit {
  extension: CEP_Extension;
  breadcrumbConfig: { icon: string; label: string; path: string };

  constructor(
    private activatedRoute: ActivatedRoute,
    private analyticsService: AnalyticsService
  ) {
    this.refresh();
  }

  async ngOnInit() {
    //await this.refresh();
  }

  async refresh() {
    await this.load();
    this.setBreadcrumbConfig();
  }

  async load() {
    await this.loadExtension();
  }

  async loadExtension() {
    const { name } = this.activatedRoute.snapshot.params;
    this.extension = await this.analyticsService.getCEP_Extension(name);
  }

  private setBreadcrumbConfig() {
    this.breadcrumbConfig = {
      icon: "c8y-modules",
      label: gettext("Extensions"),
      path: "sag-ps-pkg-analytics-extension/manage",
    };
  }
}