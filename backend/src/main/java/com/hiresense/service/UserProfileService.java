package com.hiresense.service;

import com.hiresense.dto.UpdateUserProfileDto;
import com.hiresense.dto.UserProfileDto;
import com.hiresense.model.User;
import com.hiresense.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserRepository userRepository;

    public UserProfileDto getProfile(User user) {
        UserProfileDto userProfileDto = new UserProfileDto();
        userProfileDto.setId(user.getId());
        userProfileDto.setEmail(user.getEmail());
        userProfileDto.setFullName(user.getFullName());
        userProfileDto.setRoles(user.getRoles());

        if (user.getCandidateProfile() != null) {
            userProfileDto.setHeadline(user.getCandidateProfile().getHeadline());
            userProfileDto.setSummary(user.getCandidateProfile().getSummary());
            userProfileDto.setSkills(user.getCandidateProfile().getSkills());
        }

        if (user.getRecruiterProfile() != null) {
            userProfileDto.setCompany(user.getRecruiterProfile().getCompany());
            userProfileDto.setDepartment(user.getRecruiterProfile().getDepartment());
        }

        return userProfileDto;
    }

    public UserProfileDto updateProfile(User user, UpdateUserProfileDto updateUserProfileDto) {
        user.setFullName(updateUserProfileDto.getFullName());

        if (user.getCandidateProfile() != null) {
            user.getCandidateProfile().setHeadline(updateUserProfileDto.getHeadline());
            user.getCandidateProfile().setSummary(updateUserProfileDto.getSummary());
            user.getCandidateProfile().setSkills(updateUserProfileDto.getSkills());
        }

        if (user.getRecruiterProfile() != null) {
            user.getRecruiterProfile().setCompany(updateUserProfileDto.getCompany());
            user.getRecruiterProfile().setDepartment(updateUserProfileDto.getDepartment());
        }

        userRepository.save(user);

        return getProfile(user);
    }
}
