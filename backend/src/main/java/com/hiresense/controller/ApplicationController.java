package com.hiresense.controller;

import com.hiresense.dto.ApplicationDto;
import com.hiresense.dto.ApplyToJobDto;
import com.hiresense.model.User;
import com.hiresense.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    @PreAuthorize("hasRole('CANDIDATE')")
    public ResponseEntity<ApplicationDto> applyToJob(@AuthenticationPrincipal User user, @RequestBody ApplyToJobDto applyToJobDto) {
        return ResponseEntity.ok(applicationService.applyToJob(user, applyToJobDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable Long id) {
        return ResponseEntity.ok(applicationService.getApplicationById(id));
    }
}
