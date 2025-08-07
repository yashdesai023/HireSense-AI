package com.hiresense.service;

import com.hiresense.dto.CreateJobDto;
import com.hiresense.dto.JobDto;
import com.hiresense.model.Job;
import com.hiresense.model.User;
import com.hiresense.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public JobDto createJob(User user, CreateJobDto createJobDto) {
        Job job = new Job();
        job.setRecruiter(user);
        job.setTitle(createJobDto.getTitle());
        job.setDescription(createJobDto.getDescription());
        job.setLocation(createJobDto.getLocation());
        job.setSalary(createJobDto.getSalary());
        jobRepository.save(job);
        return toJobDto(job);
    }

    public List<JobDto> getAllJobs() {
        return jobRepository.findAll().stream()
                .map(this::toJobDto)
                .collect(Collectors.toList());
    }

    public JobDto getJobById(Long id) {
        Job job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
        return toJobDto(job);
    }

    private JobDto toJobDto(Job job) {
        JobDto jobDto = new JobDto();
        jobDto.setId(job.getId());
        jobDto.setTitle(job.getTitle());
        jobDto.setDescription(job.getDescription());
        jobDto.setLocation(job.getLocation());
        jobDto.setSalary(job.getSalary());
        jobDto.setRecruiterId(job.getRecruiter().getId());
        return jobDto;
    }
}
