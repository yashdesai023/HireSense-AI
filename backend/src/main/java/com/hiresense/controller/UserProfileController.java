package com.hiresense.controller;

import com.hiresense.dto.UpdateUserProfileDto;
import com.hiresense.dto.UserProfileDto;
import com.hiresense.model.User;
import com.hiresense.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userProfileService;

    @GetMapping("/profile")
    public ResponseEntity<UserProfileDto> getProfile(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(userProfileService.getProfile(user));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserProfileDto> updateProfile(@AuthenticationPrincipal User user, @RequestBody UpdateUserProfileDto updateUserProfileDto) {
        return ResponseEntity.ok(userProfileService.updateProfile(user, updateUserProfileDto));
    }
}
