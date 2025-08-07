package com.hiresense.service;

import com.hiresense.dto.ApplicationDto;
import com.hiresense.dto.ApplyToJobDto;
import com.hiresense.enums.ApplicationStatus;
import com.hiresense.model.Application;
import com.hiresense.model.Job;
import com.hiresense.model.Resume;
import com.hiresense.model.User;
import com.hiresense.repository.ApplicationRepository;
import com.hiresense.repository.JobRepository;
import com.hiresense.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;
    private final ResumeRepository resumeRepository;

    public ApplicationDto applyToJob(User user, ApplyToJobDto applyToJobDto) {
        Job job = jobRepository.findById(applyToJobDto.getJobId()).orElseThrow(() -> new RuntimeException("Job not found"));
        Resume resume = resumeRepository.findById(applyToJobDto.getResumeId()).orElseThrow(() -> new RuntimeException("Resume not found"));

        Application application = new Application();
        application.setJob(job);
        application.setCandidate(user);
        application.setResume(resume);
        application.setStatus(ApplicationStatus.SUBMITTED);

        applicationRepository.save(application);

        return toApplicationDto(application);
    }

    public ApplicationDto getApplicationById(Long id) {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found"));
        return toApplicationDto(application);
    }

    private ApplicationDto toApplicationDto(Application application) {
        ApplicationDto applicationDto = new ApplicationDto();
        applicationDto.setId(application.getId());
        applicationDto.setJobId(application.getJob().getId());
        applicationDto.setCandidateId(application.getCandidate().getId());
        applicationDto.setStatus(application.getStatus());
        return applicationDto;
    }
}
